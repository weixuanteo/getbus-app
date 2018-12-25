import React from 'react';

import classes from './LoadStatus.css';

const loadStatus = (props) => {
    if (props.load === true) {
        return (
            <div>
                <span className={classes.Red}></span>
            </div>
        )
    } else {
        return (
            <div>
                <span className={classes.Green}></span>
            </div>
        )
    }
}

export default loadStatus;