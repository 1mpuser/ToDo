import React, { useState } from 'react';
import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/select/MySelect';
import classes from './SearchDiv.module.css'

const SearchDiv = ({typeSetter, setQuery, ...props}) => {
    function setTyper(type) {
        return setType(type);
    }
    const defaultValue = props.defaultValue;
    const [type, setType] = useState(defaultValue);
    const [value, setValue] = useState('')
    typeSetter(type);
    setQuery(value);
    return (
     <div className={classes.SD}>
        <MyInput type="text"
            value={value}
            onChange={(event)=>setValue(event.target.value)}
            placeholder = "Здесь будет запрос поиска"
        />
        <MySelect options={props.options} defaultValue={defaultValue} value={type} setValue={setTyper}/>
     </div>)
}
 
export default SearchDiv;