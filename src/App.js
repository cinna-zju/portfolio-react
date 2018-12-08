import React, { Component } from 'react';

import Home from './component/home'
import Mines from './component/mines'
import Map from './component/map'
import Design from './component/design'
import Code from './component/code'
import Sofc from './component/sofc'
import About from './component/about'
import { Router, Route } from 'react-router-dom';
import history from './history'




class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route path="/" component={Home} exact></Route>
          <Route path="/design" component={Design} exact></Route>
          <Route path="/design/map" component={Map}></Route>

          <Route path="/code" component={Code} exact></Route>
          <Route path="/code/sofc" component={Sofc}></Route>
          <Route path="/code/mines" component={Mines}></Route>
          <Route path="/about" component={About}></Route>


        </div>

      </Router>

    );
  }
}

export default App;
