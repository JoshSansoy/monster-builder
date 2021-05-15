import {useHistory} from 'react-router-dom';
import axios from 'axios';
import AddMonsterForm from '../components/AddMonsterForm'
import CSRFToken from '../hoc/CSRFToken'

function AddMonsterPage(props) {
    function addMonsterHandler(monster){
        axios.post('api/monsters/', monster,
        {headers: {'X-CSRFTOKEN': CSRFToken}})
    }

    return(
        <AddMonsterForm onAddMonster={addMonsterHandler}/>
    )
}

export default AddMonsterPage;