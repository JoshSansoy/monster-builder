import {useHistory} from 'react-router-dom';
import { Fragment, useState } from 'react';

import axios from 'axios';
import AddMonsterForm from '../components/AddMonsterForm'
import CSRFToken from '../hoc/CSRFToken'

import Modal from '../components/ui/Modal'

function AddMonsterPage(props) {

    const history = useHistory();
    const [showModal, setModal] = useState(false)
    const [errorMessage, setError] = useState()

    function toggleModal(){
        setModal(!showModal);
    }

    function addMonsterHandler(monster){
        axios.post('https://joshsansoy.eu.pythonanywhere.com/api/monsters/', monster,
        {headers: {'X-CSRFTOKEN': CSRFToken}})
            .catch((error) => {
                if (error.response) {
                    const data = error.response.data;
                    let line = '';
                    let messages = []
                    for (const key in data){
                        line = key.toString().toUpperCase() + ': ' + data[key]
                        messages.push(<p>{line}</p>)
                    }                  
                    toggleModal();
                    setError(messages);
                    console.log(messages)
                }
            }).then((response) => {
                if (response && response.status === 201){
                    history.replace('/')
                }
            })
        
    }

    return(
        <Fragment>
            <AddMonsterForm onAddMonster={addMonsterHandler}/>
            {showModal ? <Modal hideModal={toggleModal}>{errorMessage}</Modal> : null}
        </Fragment>
    )
}

export default AddMonsterPage;