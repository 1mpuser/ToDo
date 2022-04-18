import React, {useMemo} from 'react';
import { nanoid } from 'nanoid';
import classes from './MySelect.module.css'
import getSearchOption from '../../../scripts/getSearchOption';

const MySelect = ({options, defaultValue, value, setValue}) => {
    const id = nanoid;
    return (
        <select className={classes.MSL} value={value} onChange={(event) => setValue(event.target.value)}>
            <option key={id()} disabled value={defaultValue}>{defaultValue}</option>
            {[...options].map((item)=><option key={id()} value = {item.value}>
                {getSearchOption(item.name)}
            </option>)}
        </select>
    );
}

export default MySelect;