import styles from './Loader.module.css';

function Loader(){
    return(
        <div className={styles.spacer}>
            <div className={styles.loader}/>
        </div>
    )
}

export default Loader;
