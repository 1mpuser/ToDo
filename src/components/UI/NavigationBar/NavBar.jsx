import React from 'react';
import classes from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
const NavBar = ({ObjArray}) => {
    return (
        <div className={classes.navbar}>
            <div className={classes.navbar__links}>
                {ObjArray.map((item)=><Link  to={item.ref}>{item.description}</Link>)}
            </div>
        </div>
    );
}

export default NavBar;