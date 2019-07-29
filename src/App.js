import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Landing from './containers/BusStop/BusStop';
import Arrival from './containers/Arrival/Arrival';
import Geolocation from './containers/Geolocation/Geolocation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/arrival" component={Arrival} />
          <Route path="/nearby" component={Geolocation} />
        </Switch>
      </div>
    );
  }
}

export default App;
