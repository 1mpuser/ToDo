import React from 'react';
import classes from './ModalWindow.module.css'
const ModalWindow = ({children, visible, setVisible}) => {
    const classArr = [classes.MdlW];
    if (visible) classArr.push(classes.active);
    return (
        <div className={classArr.join(' ')} onClick={setVisible(false)}>
            <div className={classes.MdlWContent}>{children}</div>
        </div>
    );
}
export default ModalWindow;