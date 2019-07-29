// Geo Errors: location not enabled, unable to get location
import React from 'react';
import cssmod from './GeoErrors.module.css';

import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import classNames from 'classnames';

const styles = theme => ({
    mainButton: {
        background: "#019A8E",
        borderRadius: 9,
        border: 0,
        color: "#FFFFFF",
        height: '41px',
        width: '100%',
        fontSize: '14px',
        fontFamily: ['"Roboto"', '"sans-serif"'].join(','),
        padding: '10px 20px 10px 20px',
    },
    subButton: {
        borderRadius: 9,
        border: 0,
        height: '41px',
        width: '100%',
        fontSize: '14px',
        fontFamily: ['"Roboto"', '"sans-serif"'].join(','),
    }
})

const geoErrors = (props) => {
    const {classes, className} = props;

    return (
        <div>
            <Dialog
                fullScreen={props.fullScreen}
                open={props.open}>
                <DialogTitle>{props.errorTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Allow us to use location services to detect nearby bus stops
                    </DialogContentText>
                    <div className={cssmod.MainActionButton}>
                        <Button 
                            className={classNames(classes.mainButton, className)}
                             variant="text"
                             onClick={props.mainButtonOnClick} 
                            >{props.mainButtonTitle}</Button>
                    </div>
                    <div className={cssmod.SecondActionButton}>
                        <Button className={classNames(classes.subButton, className)}
                        variant="text"
                        href={"/"}>
                        ENTER BUS STOP CODE</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default withStyles(styles)(withMobileDialog()(geoErrors));