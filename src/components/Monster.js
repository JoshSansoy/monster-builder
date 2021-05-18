import Card from '../components/ui/Card';
import styles from './Monster.module.css';
import {AiFillHeart} from 'react-icons/ai';
import {GiBroadsword} from 'react-icons/gi';

function Monster(props){

    let image = <img src='https://berkeleydbf.files.wordpress.com/2017/04/blank-profile-picture-973460_6401.png?w=380' alt="blank"/>;
    if(props.image){
        image = <img src={props.image} alt={props.name}/>
    }

    return(
        
        <div className={styles.item}>
            <Card>
                <div className={styles.image}>
                    {image}
                </div>
                <Card>
                    <div className={styles.statIcons} style={props.damageFlash ? {backgroundColor:'#b30000'} : null}>
                        <div>
                            <AiFillHeart size='2rem' color='#ff4141'/>
                            <p>{props.health}</p>
                        </div>
                        <div>
                            <GiBroadsword size='2rem'/>
                            <p>{props.attack}</p>
                        </div>
                    </div>
                </Card>
                <div className={styles.content}>
                    <h3>{props.name}</h3>
                    <div className={styles.Description}>
                        <p>{props.description}</p>
                    </div>
                </div>    
            </Card>
        </div>
    )
}

export default Monster;