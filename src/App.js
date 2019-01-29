import React, { Component } from 'react';

import Home from './component/home'
import Mines from './component/mines'
import Map from './component/map'
import Projects from './component/projects'
import Code from './component/code'
import Sofc from './component/sofc'
import Affectiva from './component/affectiva'

import { Router, Route } from 'react-router-dom';
import history from './history'




class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route path="/" component={Home} exact></Route>
          <Route path="/projects" component={Projects} exact></Route>
          <Route path="/projects/map" component={Map}></Route>

          <Route path="/code" component={Code} exact></Route>
          <Route path="/projects/sofc" component={Sofc}></Route>
          <Route path="/projects/mines" component={Mines}></Route>
          <Route path="/projects/affectiva" component={Affectiva}></Route>



        </div>

      </Router>

    );
  }
}

export default App;
