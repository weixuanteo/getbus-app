import React from 'react';

import WabIcon from '@material-ui/icons/Accessible';
import classes from './WAB.css';

const wabSymbol = (props) => {
    const access = props.wab
    if (access === "WAB") {
        return (
            <WabIcon className={classes.wab} color="primary" fontSize="small"/>
        )
    }
    return <span></span>
}

export default wabSymbol;