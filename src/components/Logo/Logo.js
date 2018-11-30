import React from 'react';

import getBusLogo from '../../assets/images/logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={getBusLogo} alt="GetBusLogo" style={{height: props.height}}/>
    </div>
)

export default logo;