import React, { Component } from 'react';
import BusStopGetter from '../../components/BusStopGetter/BusStopGetter';

class BusStop extends Component {
    state = {
        busStopCode: ''
    }

    inputChangedHandler = (event) => {
        this.setState({
            busStopCode: event.target.value
        })
    }
    render() {
        return (
            <div>
                <BusStopGetter
                    value={this.state.busStopCode}
                    changed={this.inputChangedHandler}
                    busStopCode={this.state.busStopCode}
                />
            </div>
        )
    }
}

export default BusStop;