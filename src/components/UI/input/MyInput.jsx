import React from 'react';
import classes from './MyInput.module.css'

const MyInput = (props)=>{
    return <input className={classes.MIn} {...props}/>   
}
export default MyInput;