import styles from './Modal.module.css'
import { Fragment } from 'react'
function Modal(props){
    
    const big = (styles.BigModal);
    const normal = (styles.Modal);

    return(
        <Fragment>
            <div onClick={props.hideModal} className={styles.Backdrop}/>
            <div className={props.bigMode ? big : normal}>
                {props.children}
            </div>
        </Fragment>
    )
}

export default Modal