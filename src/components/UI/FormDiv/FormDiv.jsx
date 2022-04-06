import React, { useState } from 'react';
import classes from './FormDiv.module.css'
import WantedButton from '../normal button/WantedButton';
import MyInput from '../input/MyInput';
import { nanoid } from 'nanoid';

const FormDiv = ({create}) => {
    let id = nanoid;
    let [todoTitle, setTodoTitle] = useState('');
    let [todoText, setTodoDescription] = useState('');

    const addTodo = (event) => {
        event.preventDefault();
        const newToDO = {title: todoTitle, body: todoText};
        create(newToDO);
        setTodoTitle('');
        setTodoDescription('');
    }

    return( <form className={classes.Mdiv}>
        <MyInput id={id()} placeholder={'There is ur title'} value={todoTitle} onChange = {(event)=>setTodoTitle(event.target.value)}/>
        <MyInput id = {id()} placeholder={'There is ur text'}value={todoText} onChange = {(event)=>setTodoDescription(event.target.value)}/>
        <WantedButton id={id()} onClick = {addTodo}>Добавить TODO</WantedButton>
    </form>)
}
 
export default FormDiv;