import React, { useState } from 'react';
import classes from './FormDiv.module.css'
import WantedButton from '../normal button/WantedButton';
import MyInput from '../input/MyInput';
import { nanoid } from 'nanoid';

const FormDiv = ({create}) => {
    let id = nanoid;
    let [todoText, setTodoText] = useState('');

    const addTodo = (event) => {
        event.preventDefault();
        const newToDO = todoText;
        create(newToDO);
        setTodoText('')
    }

    return( <form className={classes.Mdiv}>
        <MyInput id={id()} placeholder={'Some text'} value={todoText} onChange = {(event)=>setTodoText(event.target.value)}/>
        <WantedButton id={id()} onClick = {addTodo}>Добавить TODO</WantedButton>
    </form>)
}
 
export default FormDiv;