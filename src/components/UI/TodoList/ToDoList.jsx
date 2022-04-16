import React from 'react';
import classes from './ToDoList.module.css'
import Todo from '../todo/Todo';
import { nanoid } from 'nanoid';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ToDoList = ({remove, objs}) => {
    let id = nanoid;
    //posts is just an array with objects which we can take to map and take to todos
    const todos = objs.map((item, index) => <CSSTransition 
        key={id()}
        timeout={500}
        classNames="todos"
    >
		<Todo remove={remove} number={index + 1} object = {item}/>
	</CSSTransition>);
    let header =  <h1 style={{textAlign: 'center'}}>Тут нихуя нет</h1>;
    let div;
    
    if (todos.length !== 0)  div = <div className={classes.TDL}>{
        <TransitionGroup>
            {todos}
        </TransitionGroup>

        }</div>
    else div = <div className={classes.TDL}>{header}</div>
    return div;
}
export default ToDoList;