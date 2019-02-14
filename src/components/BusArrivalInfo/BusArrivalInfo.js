import React, {Component} from 'react';

import classNames from 'classnames';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from "@material-ui/core/styles";
import BusDetail from './BusDetail/BusDetail';
import Collapse from '@material-ui/core/Collapse';
import { ButtonBase } from '@material-ui/core';

const styles = theme => ({
    mainComp: {
      display: 'flex',
        justifyContent: 'center',
        paddingBottom: '30px',
    },
    cardButton: {
        display: "block",
        textAlign: "initial",
    },
    cardComponent: {
        // height: '79px',
        width: '325px',
        display: 'flex',
        borderRadius: 8,
    },
    expandedSpacing: {
        paddingTop: '0px'
    },
    padSpacing: {
        paddingTop: '16px'
    }
})

class BusArrivalInfo extends Component {
    state = {
        expanded: false
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded}))
    }

    render() {
        const {classes, className} = this.props;
        let bus2Comp, bus3Comp;

        if (this.props.etaTime2 !== "") {
            bus2Comp = (
                <BusDetail
                busNum={this.props.busNo2}
                destination={this.props.dest2}
                load={this.props.load2}
                busType={this.props.busType2}
                etaTime={this.props.etaTime2}
                wab={this.props.wab2}
            />
            )
        }

        if (this.props.etaTime3 !== "") {
            bus3Comp = (
                <BusDetail
                busNum={this.props.busNo3}
                destination={this.props.dest3}
                load={this.props.load3}
                busType={this.props.busType3}
                etaTime={this.props.etaTime3}
                wab={this.props.wab3}
            />
            )
        }

        return (
            <div className={classNames(classes.mainComp, className)}>
            <Card raised={true} className={classNames(classes.cardComponent, className)}>
            <ButtonBase className={classes.cardButton} onClick={this.handleExpandClick}>
                <CardContent>
                    <BusDetail
                        busNum={this.props.busNo}
                        destination={this.props.dest}
                        load={this.props.load}
                        busType={this.props.busType}
                        etaTime={this.props.etaTime}
                        wab={this.props.wab}
                    />
                </CardContent>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent className={classes.expandedSpacing}>
                        {bus2Comp}
                    <div className={classes.padSpacing}></div>
                        {bus3Comp}
                    </CardContent>
                </Collapse>
                </ButtonBase>
            </Card>
            </div>
        )
    }
}

export default withStyles(styles)(BusArrivalInfo);