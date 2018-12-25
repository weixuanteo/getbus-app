import React from 'react';

import wabIcon from '../../../assets/images/wheelchair-access.png';
import classes from './WAB.css';

const wab = (props) => (
    <div className={classes.wabIcon}>
        <img src={wabIcon} alt="WAB" style={{height: props.height}}/>
    </div>
)

export default wab;