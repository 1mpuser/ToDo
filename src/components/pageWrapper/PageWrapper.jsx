import React from 'react';
//import usePagination from '../../hooks/usePagination';
//there is not could be any hooks cuse they must be on upper level
import classes from './pageWrapper.module.css';
import MyButton from '../UI/button/MyButton';
import { nanoid } from 'nanoid';

const PageWrapper = (props) => {
    //props would be different 
    const id = nanoid;
    let buttonArr = [];
    if (Array.isArray(props.arrWithTotalPages))  { buttonArr = props.arrWithTotalPages.map((item, index) => {
            let isItCurrentIndex = false;
            if (props.currentPage  === index) isItCurrentIndex = true;
            return <MyButton 
                        className={isItCurrentIndex ?  classes.pageS : classes.page} 
                        key={id()}
                        >
                            {item}
                    </MyButton>});}
    else {
        console.log(props.arrWithTotalPages);
        buttonArr = <div>{'Хуй'}</div>;
    }
        return (
        <div className={classes.PW}>
            {buttonArr}
        </div>
    );
}

export default PageWrapper;