import React, { Component } from 'react';

import Loading from '../../components/Nearby/Loading/Loading';
import classes from './Geolocation.module.css';
import GeoErrors from '../../components/Nearby/GeoErrors/GeoErrors';
import axiosNearby from '../../axios-nearby';
import NearbyStops from '../../components/Nearby/NearbyStops/NearbyStops';

class Geolocation extends Component {
    state = {
        loading: true,
        error: null,
        stops: [],
    }

    getNearby(lat, lng) {
        let userLocation = {
            lat: lat,
            lng: lng
        }
        this.setState({loading: true}, () => {
            axiosNearby.post('/getNearby', userLocation)
            .then(res => {
                console.log(res)
                this.setState({
                    loading: false,
                    stops: [...res.data]
                })
            })
            .catch(error => {
                // handle error here
                console.log(error)
            })
        })
    }

    getCurrentLocation() {
        navigator.geolocation.getCurrentPosition(position => {
            console.log("coords: ", position.coords)
            this.getNearby(position.coords.latitude, position.coords.longitude)
        }, (error) => {
            if (error.code === error.PERMISSION_DENIED) {
                console.log("PERMISSION_DENIED ", error.code)
                this.setState({error: 1})
            }
            if (error.code === error.POSITION_UNAVAILABLE) {
                console.log("POSITION_UNAVAILABLE ", error.code)
                this.setState({error: 2})
            }
            if (error.code === error.TIMEOUT) {
                console.log("TIMEOUT ", error.code)
                this.setState({error: 3})
            }
        }, {
            enableHighAccuracy: true
        })
    }

    handleLocationServicesDenied() {
        // handle Enable Location Services action here
    }

    componentDidMount() {
        this.getCurrentLocation()
    }

    render() {
        let content;
        
        if (this.state.loading) {
            content = (
                <div className={classes.GeoLoading}>
                    <div className={classes.Text}>
                        <p>Finding the nearest bus stops</p>
                    </div>
                    <div className={classes.Loading}>
                        <Loading />
                     </div>
                </div>
            )
        }

        if (!this.state.loading) {
            content = (
                <div className={classes.NearestStopItems}>
                    <div className={classes.NearestStopTitle}>Nearest Bus Stops</div>
                    {this.state.stops.map(d => (
                        <NearbyStops key={d.stopID} stopName={d.name} distance={d.distance + " km"} id={d.stopID}/>
                    ))}
                </div>
            )
        }

        if (this.state.error === 1) {
            content = (
                <GeoErrors fullScreen={false} open={true} errorTitle="Use Location Services" mainButtonTitle="Use Location Services" mainButtonOnClick={this.handleLocationServicesDenied}/>
            )
        }

        if (this.state.error === 2) {
            content = (
                <GeoErrors fullScreen={false} open={true} errorTitle="Location Services Disabled" mainButtonTitle="Try Again" mainButtonOnClick={this.getCurrentLocation}/>
            )
        }
        
        return (
            <div>
                {content}
            </div>
        )
    }
}

export default Geolocation;