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
    let header =  <h1 style={{textAlign: 'center'}}>Тут нихуя нет</h1>;
    let div;
    if (todos.length !== 0)  div = <div className={classes.TDL}>{todos}</div>
    else div = <div className={classes.TDL}>{header}</div>
    return div;
}
export default ToDoList;