import React from "react";
import classes from './WantedButton.module.css'

const WantedButton = ({children, ...props}) => {
    return <button {...props} className={classes.WBtn}>{children}</button>
}
export default WantedButton;