import React from 'react';
import classes from './ToDoList.module.css'
import Todo from '../todo/Todo';
import { nanoid } from 'nanoid';
const ToDoList = ({remove, objs}) => {
    let id = nanoid;
    //posts is just an array with objects which we can take to map and take to todos
    const todos = objs.map((item, index) => (
		<Todo remove={remove} key={id()} number={index + 1} /*title={item.title} body = {item.body}*/ object = {item}/>
	));
    
    return (
        <div className={classes.TDL}>
            {todos}
        </div>
    );
}

export default ToDoList;