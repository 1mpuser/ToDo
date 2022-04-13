import React from 'react';
import classes from './ModalWindow.module.css'
const ModalWindow = ({children, visible, setVisible}) => {
    let classArr = [classes.MdlW];
    if (visible) classArr.push(classes.active);
    else classArr = [classes.MdlW];
    return (
        <div className={classArr.join(' ')} onClick={()=>setVisible(false)}>
            <div className={classes.MdlWContent} onClick={(event) => event.stopPropagation()}>{children}</div>
        </div>
    );
}
export default ModalWindow;