import React from 'react';

import WAB from '../../ArrivalInfo/WAB/WAB';
import classNames from 'classnames';
import LoadStatus from '../../ArrivalInfo/LoadStatus/LoadStatus';
import cssmod from './BusDetail.module.css';
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid'

//TODO add logic to WAB

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    eta: {
        display: 'flex',
    }
})

const busDetail = (props) => {
    const { classes, className } = props;

    return (
        <Grid container className={classes.root} spacing={16}>
            <Grid item xs={4}>
                <div className={cssmod.BusNum}>
                    <span>{props.busNum}</span>
                </div>
                <div className={cssmod.Destination}>
                    {props.destination}
                </div>
            </Grid>
            <Grid item xs={4} style={{padding: 12}} >
                <div className={cssmod.BusType}>
                    <span><LoadStatus load={props.load}/></span>
                    <span>{props.busType}</span>
                </div>
            </Grid>
            <Grid item xs={4} className={classes.eta}>
                <div className={cssmod.EtaTime}>
                    {props.etaTime}
                </div>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(busDetail);