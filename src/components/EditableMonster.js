import {Fragment, useState} from 'react';

import Card from './ui/Card';
import AddMonsterForm from './AddMonsterForm';
import styles from './EditableMonster.module.css';

function EditableMonster(props){

    const [showEdit, setShowEdit] = useState();

    const monster = {
        name: props.name,
        image: props.image,
        description: props.description,
        id: props.id,
        health: props.health,
        attack: props.attack,
    }

    function showEditHandler(){
        if(!showEdit) {setShowEdit(1)}
        else {setShowEdit(0)}
    }

    function deleteHandler(){
        props.onDeleteMonster(monster.id)
    }
    
    let content = (
        <Fragment>
            <button onClick={showEditHandler}>Edit</button>
            <button onClick={deleteHandler}>Delete</button>
        </Fragment>
    )

    if (props.returnSelection){
        content = (
            <button onClick={() => props.returnSelection(monster)}>Select</button>
        )
    }

    return(
        <div className={styles.wrapper}>
            <Card>
            <div className={styles.item}>
                    <div className={styles.image}>
                        <img src={monster.image} alt={monster.name}/>
                    </div>
                    <div>
                        <h3>{monster.name}</h3>
                    </div>
                    <div className={styles.actions}>
                        {content}
                    </div>
                
            </div>
            </Card>
            {showEdit ? <AddMonsterForm  targetMonster={monster} onEditMonster={props.onEditMonster} hideEdit={showEditHandler} mode={'edit'}/> : null}
        </div>
        
    )
}

export default EditableMonster