import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import { ButtonBase, FormHelperText } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    mainComp: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '28px'
    },
    cardComp: {
        width: '283px',
        display: FormHelperText,
        borderRadius: 8,
    },
    cardButton: {
        display: 'block',
        textAlign: 'initial'
    },
    stopText: {
        fontFamily: ['"Roboto"', '"sans-serif"'].join(','),
        fontWeight: 'bold',
        fontSize: '15px',
    },
    stopWidth: {
        width: '240px',
    },
    distanceText: {
        fontFamily: ['"Roboto"', '"sans-serif"'].join(','),
        fontWeight: 'normal',
        fontSize: '15px',
        textAlign: 'end'
    },
    distanceWidth: {
        width: '60px',
    }
})

const nearbyStops = (props) => {
    const {classes} = props
    return (
        <div className={classes.mainComp}>
            <Card raised={true} key={nearbyStops.key} className={classes.cardComp}>
                <ButtonBase className={classes.cardButton} href={ "arrival?code=" + props.id}>
                    <CardContent>
                        <Grid container className={classes.root}>
                            <Grid item xs className={classes.stopWidth}>
                                <div className={classes.stopText}>
                                    {props.stopName}
                                </div>
                            </Grid>
                            <Grid item className={classes.distanceWidth}>
                                <div className={classes.distanceText}>
                                    {props.distance}
                                </div>
                            </Grid>
                        </Grid>
                    </CardContent>
                </ButtonBase>
            </Card>
        </div>
    )
}

export default withStyles(styles)(nearbyStops);