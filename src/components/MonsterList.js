import Monster from './Monster';
import styles from './MonsterList.module.css';

function MonsterList(props) {

    return(
        <div className={styles.grid}>
            {props.monsters.map((monster) => (
                <Monster
                key={monster.id}
                id={monster.id}
                image={monster.image}
                name={monster.name}
                description={monster.description}
                health={monster.health}
                attack={monster.attack}
                />
            ))}
        </div>
    )
}

export default MonsterList;