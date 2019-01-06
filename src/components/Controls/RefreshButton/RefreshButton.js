
import React, { Component } from 'react';

import Fab from '@material-ui/core/Fab';
import RefreshIcon from '@material-ui/icons/Refresh';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    fab: {
        // to change this
        position: 'fixed',
        bottom: theme.spacing.unit * 4,
        right: theme.spacing.unit * 4,
        backgroundColor: '#f0f0f0',
    },
    refreshIcon: {
        color: '#3bad6f',
    }
})

class RefreshButton extends Component { 
    render() {
        const { classes } = this.props
        return (
            <div>
                <Fab size="medium" className={classes.fab} onClick={this.props.refreshHandler}>
                    <RefreshIcon className={classes.refreshIcon}/>
                </Fab>
            </div>
        )
    }
}

export default withStyles(styles)(RefreshButton);