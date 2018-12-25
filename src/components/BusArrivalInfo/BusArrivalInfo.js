import React from 'react';

import classNames from 'classnames';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from "@material-ui/core/styles";
import BusDetail from './BusDetail/BusDetail';

const styles = theme => ({
    mainComp: {
      display: 'flex',
        justifyContent: 'center',
        paddingBottom: '30px',
    },
    cardComponent: {
        height: '79px',
        width: '325px',
        display: 'flex',
        borderRadius: 8,
    }
})

const busArrivalInfo = (props) => {
    const {classes, className} = props;

    return (
        <div className={classNames(classes.mainComp, className)}>
        <Card raised={true} className={classNames(classes.cardComponent, className)}>
            <CardContent>
                <BusDetail
                    busNum={props.busNo}
                    destination={props.dest}
                    load={props.load}
                    busType={props.busType}
                    etaTime={props.etaTime}
                />
                </CardContent>
            </Card>
        </div>
    )
}

export default withStyles(styles)(busArrivalInfo);