import React, { Component } from 'react';

import Home from './component/home'
import Mines from './component/mines'
import Map from './component/map'
import Projects from './component/projects'
import Photo from './component/photo'
import Sofc from './component/sofc'
import Affectiva from './component/affectiva'
import Infovis from './component/infovis'
import Splash from './component/splash'

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

          <Route path="/photo" component={Photo} exact></Route>
          <Route path="/projects/sofc" component={Sofc}></Route>
          <Route path="/projects/mines" component={Mines}></Route>
          <Route path="/projects/affectiva" component={Affectiva}></Route>
          <Route path="/projects/infovis" component={Infovis}></Route>
          <Route path="/projects/splash" component={Splash}></Route>




        </div>

      </Router>

    );
  }
}

export default App;
