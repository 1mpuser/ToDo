import React, { useState } from 'react';
import MySelect from './UI/select/MySelect';


const TodoFilter = ({returnSortArr, ...props}) => {
    const defaultValue = 'Сратировка';
    const [type, setType] = useState(defaultValue);
    const typeSetter = (type) => {
        setType(type);
        if (type !== defaultValue) returnSortArr(type);
    };
    return (
        <MySelect 
        defaultValue = {defaultValue}
        options = {props.options}
        value={type}
        setValue = {typeSetter}/>
    );
}

export default TodoFilter;