import { Fragment, useState, useEffect } from 'react'

import Monster from './Monster'
import styles from './Battlefield.module.css'
import Modal from '../components/ui/Modal'
import axios from 'axios'
import MonsterList from './MonsterList'

function Battlefield() {

    const [showModal, setModal] = useState(false);
    const [loadedMonsters, setMonsters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentButton, setCurrentButton] = useState();
    const [showButton, setShowButton] = useState({
        buttonA : {visible:true},
        buttonB : {visible:true}
    });

    const [displayText, setText] = useState('...waiting for opponents');

    const [fighterA, setFighterA] = useState({});
    const [fighterB, setFighterB] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'api/monsters'
            );

            const data = result.data;
            const monsters = [];

            for(const key in data){
                const monster = {
                    id: key,
                    ...data[key]
                };

                monsters.push(monster);
            }
            setMonsters(monsters);
            setIsLoading(false);
        }
        fetchData();
    }, []);

    function updateDisplay(t){
        setText(displayText + '\n' + t)
    }

    function selectFighter(e){
        setCurrentButton(e.target.name);
        toggleModal();
        
    }
    function toggleModal(){
        setModal(!showModal);
    }

    function monsterSelection(m){
        if (currentButton === 'buttonA'){
            setFighterA(m)
            setShowButton({...showButton, buttonA:{visible:false}})
            updateDisplay('Fighter 1 Selected')
        }
        if (currentButton === 'buttonB'){
            setFighterB(m)
            setShowButton({...showButton, buttonB:{visible:false}})
            updateDisplay('Fighter 2 Selected')
        }
        setModal(!showModal);
    }

    const content = (
        <Modal bigMode={true} hideModal={() => toggleModal()}>
            <MonsterList mode={'edit'} returnSelection={monsterSelection} monsters={loadedMonsters}/>
        </Modal>
    )

    return(
        <Fragment>
            <div className={styles.Wrapper}>
                <div className={styles.Battlefield}>
                    <div className={styles.Fighter}>
                        <Monster 
                            key={fighterA.id}
                            id={fighterA.id}
                            image={fighterA.image}
                            name={fighterA.name}
                            description={fighterA.description}
                            health={fighterA.health}
                            attack={fighterA.attack}
                        />
                        {showButton.buttonA.visible ? <button name="buttonA" onClick={selectFighter}>Choose Monster</button>: null}
                    </div>
                    <div className={styles.DisplayBox}>
                        <textarea value = {displayText}/>
                        <button>Start</button>
                    </div>
                    <div className={styles.Fighter}>
                        <Monster 
                            key={fighterB.id}
                            id={fighterB.id}
                            image={fighterB.image}
                            name={fighterB.name}
                            description={fighterB.description}
                            health={fighterB.health}
                            attack={fighterB.attack}/>
                        {showButton.buttonB.visible ? <button name="buttonB" onClick={selectFighter}>Choose Monster</button>: null}
                    </div>
                </div>
            </div>
            {showModal ? content : null}
        </Fragment>
    )
}

export default Battlefield