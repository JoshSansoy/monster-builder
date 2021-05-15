import {useEffect, useState} from 'react';

import axios from 'axios';
import Loader from '../components/ui/Loader'
import MonsterList from '../components/MonsterList'

function HomePage() {

    const [loadedMonsters, setMonsters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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

    let content;

    if (isLoading){
        content = <Loader/>;
    }
    else{
        content = <MonsterList monsters = {loadedMonsters}/>
    }

    return(
        <div>
            {content}
        </div>
    );
}

export default HomePage;