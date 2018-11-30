import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import BusStop from "./containers/BusStop/BusStop";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={BusStop}/>
        </Switch>
      </div>
    );
  }
}

export default App;
