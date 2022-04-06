import React from "react";
import classes from './Todo.module.css'

const Todo = ({remove,...props}) =>{
    //оказывается при онклике всё срабатывает только при стрелочном говне и первичных скобочках
    return <div className={classes.tdh}>
        <div  className={classes.td}>
            <div className="text">
                <strong>{props.number}{' '}{props.object.title}</strong>
                <div>{props.object.body}</div>
            </div>
            <div className="actionContainer">
                <button className={classes.btn}>Complete</button>
            <button onClick={()=>remove(props.object)} className={classes.btn} >Delete</button>
            </div>
    </div>
    </div>
}

export default Todo;