import {useEffect} from 'react';

import {Link,useLocation,useHistory} from 'react-router-dom';
import {Fragment} from 'react'

import styles from './MainNavigation.module.css';
import logo from "../../assets/logo.png"

const selected = {backgroundColor:"dodgerblue", color:"white"}
const fightSelected = {backgroundColor:"#ff4141", color:"white"}

function MainNavigation(props){
    const history = useHistory()

    const getPath = useLocation();
    useEffect(()=> {
        console.log(getPath.pathname)
    }, [getPath])

    function logoClick(){
        history.push("/")
    }

    return (
        <Fragment>
            <header className={styles.header}>
                <div className={styles.flexWrapper}>
                        <div style={{cursor:'default'}} className={styles.headerLeft}>
                                <img onClick={logoClick} style={{cursor:'pointer'}} src={logo} alt="logo"/>
                                <p>Monster Builder</p> 
                        </div>     
                    <nav> 
                        <ul> 
                            <li>
                                <Link style={('/' === getPath.pathname) ? selected: null} to='/'>All Monsters</Link>
                            </li>
                            <li>
                                <Link style={('/edit' === getPath.pathname) ? selected: null} to='/edit'>Edit Monsters</Link>
                            </li>
                            <li>
                                <Link style={('/add' === getPath.pathname) ? selected: null} to='/add'>Create Monster</Link>
                            </li>
                            <li className={styles.FightButton}>
                                <Link style={('/fight' === getPath.pathname) ? fightSelected: null} to='/fight'>FIGHT</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                {props.children}
            </main>
        </Fragment>
    )

}

export default MainNavigation;

//<NavLink exact to="/" className="nav-link" activeClassName="active">Edit Monsters</NavLink>