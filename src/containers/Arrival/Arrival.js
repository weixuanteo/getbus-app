import React, { Component } from 'react'
import {Link} from "react-router-dom";

import Aux from '../../hoc/Aux';
import BusStopInfo from '../../components/BusStopInfo/BusStopInfo';
import Logo from '../../components/Logo/Logo'
import RefreshButton from '../../components/Controls/RefreshButton/RefreshButton';
import classes from './Arrival.module.css';
import axiosbus from '../../axios-bus';
import axiosstop from '../../axios-stop';
import BusArrivalInfo from '../../components/BusArrivalInfo/BusArrivalInfo';
import qs from 'query-string';

//TODO optimise redirect from logo

class Arrival extends Component {
    state = {
        stopCode: "",
        stopName: "",
        services: []
    }

    getStopName(busStopCode) {
        return axiosstop.get(busStopCode + '.json')
    }

    componentDidMount() {        
        let busData = {
            busStopCode: null
        }
        
        const code = qs.parse(this.props.location.search)
        busData.busStopCode = code.code

        console.log("[busData] :" + busData)
        axiosbus.post('/GetBusTest', busData)
            .then(res => {
                console.log(res)
                console.log(res.data)
                this.setState({stopCode: res.data.busStopCode})
                this.setState({services: res.data.services})
            })
            .catch(error => {
                // handle error here
                console.log(error)
            })
        
        this.getStopName(busData.busStopCode)
            .then(res => {
            console.log(res)
            console.log(res.data)
            this.setState({stopName: res.data.Description})
            })
            .catch(error => {
                //handle error here
                console.log(error)
            })
    }

    refreshHandler = () => {
        window.location.reload()
    }

    render() {
        console.log(this.state.stopCode)
        let top = (
            <div>
                <div className={classes.Logo}>
                    <Link to='/'>
                        <Logo />
                    </Link>
                </div>
                <div className={classes.StopInfo}>
                    <BusStopInfo busStopCode={this.state.stopCode} busStopName={this.state.stopName}/>
                </div>
            </div>
        )


        return (
            <Aux>
                <div>
                    {top}
                </div>
                <div>
                    {this.state.services.map(i => (
                        <BusArrivalInfo
                            busNo={i.serviceNo}
                            dest={i.nextBus.destinationCode}
                            load={i.nextBus.load}
                            busType={i.nextBus.type}
                            etaTime={i.nextBus.estimatedArrival}
                            wab={i.nextBus.feature}

                            busNo2={i.serviceNo}
                            dest2={i.nextBus2.destinationCode}
                            load2={i.nextBus2.load}
                            busType2={i.nextBus2.type}
                            etaTime2={i.nextBus2.estimatedArrival}
                            wab2={i.nextBus2.feature}
                            
                            busNo3={i.serviceNo}
                            dest3={i.nextBus3.destinationCode}
                            load3={i.nextBus3.load}
                            busType3={i.nextBus3.type}
                            etaTime3={i.nextBus3.estimatedArrival}
                            wab3={i.nextBus3.feature}
                        />
                    ))}
                </div>
                <RefreshButton refreshHandler={this.refreshHandler}/>
            </Aux>
        )
    }
}

export default Arrival;