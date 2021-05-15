import {useEffect} from 'react';

import {Link,useLocation} from 'react-router-dom';
import {Fragment} from 'react'

import styles from './MainNavigation.module.css';
import logo from "../../assets/logo.png"

const selected = {backgroundColor:"dodgerblue", color:"white"}

function MainNavigation(props){

    const getPath = useLocation();
    useEffect(()=> {
        console.log(getPath.pathname)
    }, [getPath])

    return (
        <Fragment>
            <header className={styles.header}>
                <div className={styles.flexWrapper}>
                    <div className={styles.headerLeft}>
                        <img src={logo} alt="logo"/>
                        <p>Monster Builder</p> 
                    </div>
                    <nav>   
                        <ul> 
                            <li>
                                <Link style={('/' === getPath.pathname) ? selected: null}to='/'>All Monsters</Link>
                            </li>
                            <li>
                                <Link to='/'>Edit Monsters</Link>
                            </li>
                            <li>
                                <Link to='/'>Create Monster</Link>
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