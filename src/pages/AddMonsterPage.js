import {useState, useEffect} from 'react';
import Card from '../components/ui/Card';
import Monster from '../components/Monster'

function AddMonsterPage(props) {

    const [health, updateHealth] = useState(1);
    const [attack, updateAttack] = useState(1);

    const [newMonster, updateNewMonster] = useState ({name: '', image: '', description: '', health: 1, attack: 1})

    function handleInputChange(e){
        const {name, value} = e.target
        updateNewMonster({...newMonster, [name]:value})
    }

    
    return(
        <div>
            <Card>
                <p>Add Monster</p>
                <div>
                    <label>Health</label>
                    <label>Attack</label>
                </div>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input
                    value={newMonster.name}
                    name='name'
                    type='text'
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label html='image'>Image (Link)</label>
                    <input
                    value={newMonster.image}
                    name='image'
                    type='url'
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <textarea
                    value={newMonster.description}
                    name='description'
                    type='text'
                    rows='5'
                    onChange={handleInputChange}
                    />
                </div>
            </Card>
            <div>
                <Card>
                    <Monster name={newMonster.name} image={newMonster.image} description={newMonster.description} health={health} attack={attack}/>
                </Card>
            </div>
        </div>
    )
}

export default AddMonsterPage;