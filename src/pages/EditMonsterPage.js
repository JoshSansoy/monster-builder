import {useEffect, useState} from 'react';
import axios from 'axios';

import Loader from '../components/ui/Loader';
import MonsterList from '../components/MonsterList';
import CSRFToken from '../hoc/CSRFToken';

function EditMonsterPage (props) {

    const [loadedMonsters, setMonsters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [shouldLoad, setShouldLoad] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
            '/api/monsters/'
            );
            
            const data = result.data;
            const monsters = [];
            
            for (const key in data){
                const monster = {
                    id: key,
                    ...data[key]
                };
                
                monsters.push(monster);
            };
            
            setMonsters(monsters);
            setIsLoading(false);
        }
       fetchData();
    }, [shouldLoad]);

    function editMonsterHandler(monster, id){
            axios.put('/api/monsters/' + id + '/', monster, 
                {headers: {'X-CSRFTOKEN': CSRFToken}})
                    .then(() => {
                    setShouldLoad(!shouldLoad);
                    });

        };

    function deleteMonsterHandler(id){
        axios.delete('/api/monsters/' + id + '/', 
            {headers: {'X-CSRFTOKEN': CSRFToken}})
                .then(() => {
                    setShouldLoad(!shouldLoad);
                });
    };
          
    let content = null

    if (isLoading) {
        content = <Loader/>;
    }
    else{
        content = <MonsterList monsters={loadedMonsters} mode={'edit'} onEditMonster={editMonsterHandler} onDeleteMonster={deleteMonsterHandler}/>;
    }

   
    return (
            <div>
                {content}
            </div>
        )
}

export default EditMonsterPage;