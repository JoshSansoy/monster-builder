import styles from './Modal.module.css'

function Modal(props){
    
    return(
        <div onClick={props.hideModal} className={styles.Backdrop}>
            <div className={styles.Modal}>
                {props.children}
            </div>
        </div>
    )
}

export default Modal