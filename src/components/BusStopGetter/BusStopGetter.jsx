import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';
import Logo from '../Logo/Logo'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import cssmod from './BusStopGetter.module.css';

const styles = theme => ({
    submitButton: {
        background: '#F8F8F8',
        borderRadius: 5,
        border: 0,
        color: '#12A085',
        height: '30px',
        width: '145px',
        fontSize: 11,
        fontWeight: 'bold',
        fontFamily: ['"Roboto"', '"sans-serif"'].join(','),
        position: 'relative',
        top: 42
    },
    nearbyButton: {
        background: '#06575B',
        borderRadius: 5,
        border: 0,
        color: '#F8F8F8',
        height: '30px',
        width: '145px',
        fontSize: 11,
        fontWeight: 'bold',
        fontFamily: ['"Roboto"', '"sans-serif"'].join(','),
        position: 'relative',
        marginTop: 60,
    },
    inputText: {
        border: '1.5px solid #f8f8f8',
        borderRadius: 6,
        height: '52px',
        width: '281px',
        fontSize: 12,
        position: 'relative',
        top: 20
    },
    inputPlaceholder: {
        color: '#f8f8f8',
        '&::placeholder': {
            color: 'white',
            fontSize: 12,
            textAlign: 'center',
            padding: '5px 0 5px 0',
        },
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderColor: '#ffffff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
        }
    }
})

const busStopGetter = (props) => {
    const {classes, className} = props;

   return (
       <div className={cssmod.BusStopGetter}>
           <div className={cssmod.Logo}>
               <Link to='/'>
                   <Logo />
               </Link>
           </div>
           <TextField className={classNames(classes.inputText, className)}
                      placeholder="Input Bus Stop Code"
                      margin="normal"
                      variant="outlined"
                      value={props.value}
                      onChange={props.changed}
                      InputProps={{classes: {input: classes.inputPlaceholder}}}
           />
           <div className={cssmod.Submit}>
               <Link to={{
                   pathname: "/arrival",
                   search: "?code=" + props.busStopCode
               }}>
                   <Button className={classNames(classes.submitButton, className)}
                           variant="contained"
                           color="primary">SUBMIT</Button>
               </Link>
           </div>
           <div className={cssmod.Nearby}>
               <Link to={{
                  pathname: "/nearby" 
               }}>
                   <Button variant="contained" className={classNames(classes.nearbyButton, className)}>
                       <LocationOnIcon />
                       Stops Nearby
                   </Button>
               </Link>
           </div>
       </div>
   )
}

export default withStyles(styles)(busStopGetter);