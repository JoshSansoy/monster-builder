import {useState, useEffect} from 'react';
import Card from '../components/ui/Card';
import Monster from '../components/Monster'
import styles from './AddMonsterForm.module.css'
import {AiFillHeart} from 'react-icons/ai';
import {GiBroadsword} from 'react-icons/gi';
import {IoIosArrowDropleftCircle} from 'react-icons/io'
import {IoIosArrowDroprightCircle} from 'react-icons/io'

function AddMonsterForm(props) {

    const [health, updateHealth] = useState(1);
    const [attack, updateAttack] = useState(1);

    const [newMonster, updateNewMonster] = useState ({name: '', image: '', description: '', health: 1, attack: 1})

    function submitMonster(){
        const {name, image, description} = newMonster;
        if (name || image || description) {

            if(props.mode === 'edit') {
                props.hideEdit();
                props.onEditMonster(newMonster, props.targetMonster.id)
            }

            else props.onAddMonster(newMonster)
        }
    }
    function changeHealth(mode){
        let newHealth;
        (mode === '+') ? newHealth = health + 1 : newHealth = health -1
        if (newHealth !== 0) {
            updateHealth(newHealth);
            updateNewMonster({...newMonster,'health': newHealth})
        }
    }

    function changeAttack(mode){
        let newAttack;
        (mode === '+') ? newAttack = attack + 1 : newAttack = attack -1
        if (newAttack !== 0) {
            updateAttack(newAttack);
            updateNewMonster({...newMonster,'attack': newAttack})
        }
    }

    function handleInputChange(e){
        const {name, value} = e.target
        updateNewMonster({...newMonster, [name]:value})
    }
    
    useEffect(() => {
        if (props.mode ==='edit'){
            updateNewMonster(props.targetMonster)
            updateHealth(props.targetMonster.health)
            updateAttack(props.targetMonster.attack)
        }
    }, [])

    return(
        <div className={styles.formItems}>
            <div className={styles.formWrapper}>
                <Card>
                <div className={styles.form}>
                    
                    <Card>
                        <div className={styles.statIcons}>
                            <div>
                                <button onClick={changeHealth}><IoIosArrowDropleftCircle  color="dodgerblue" size="2rem"/></button>
                                    <AiFillHeart size='2rem' color='red'/>
                                <button onClick={() => changeHealth('+')}><IoIosArrowDroprightCircle color="dodgerblue" size="2rem"/></button>
                            </div>
                            <div>
                                <button onClick={changeAttack}><IoIosArrowDropleftCircle  color="dodgerblue" size="2rem"/></button>
                                <GiBroadsword size='2rem'/>
                                <button onClick={() => changeAttack('+')}><IoIosArrowDroprightCircle color="dodgerblue" size="2rem"/></button>
                            </div>
                        </div>
                    </Card>
                    <div className={styles.control}>
                        <label htmlFor='name'>Name</label>
                        <input
                        value={newMonster.name}
                        name='name'
                        type='text'
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.control}>
                        <label html='image'>Image (Link)</label>
                        <input
                        value={newMonster.image}
                        name='image'
                        type='url'
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.control}>
                        <label htmlFor='description'>Description</label>
                        <textarea
                        style={{resize:"none"}}
                        value={newMonster.description}
                        name='description'
                        type='text'
                        rows='5'
                        onChange={handleInputChange}
                        />
                    </div>
                </div>
                </Card>
            </div>
            <div className={styles.preview}>
                <Card>
                    <Monster name={newMonster.name} image={newMonster.image} description={newMonster.description} health={health} attack={attack}/>
                    <button onClick={submitMonster}className={styles.addMonsterButton}>Add Monster</button> 
                </Card>
            </div>
        </div>
    )
}

export default AddMonsterForm