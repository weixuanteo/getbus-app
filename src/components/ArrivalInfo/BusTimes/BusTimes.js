import React from 'react';

import classes from './BusTimes.css';

const busTimes = (props) => {
    return (
        <div>
            <span className={classes.Times}>{props.nextBus}</span>
            <span className={classes.Times}>{props.nextBus2}</span>
            <span className={classes.Times}>{props.nextBus3}</span>
        </div>
    )
}

export default busTimes;