import React from 'react';

import classes from './LoadStatus.module.css'

const loadStatus = (props) => {
    const load = props.load
    if (load === "SEA") {
        return (
                <span className={classes.Green}></span>
        )
    }
    if (load === "SDA") {
        return (
                <span className={classes.Yellow}></span>
        )
    }
    if (load === "LSD") {
        return (
                <span className={classes.Red}></span>
        )
    }
    return <span></span>
}

export default loadStatus;