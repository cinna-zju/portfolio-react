import React, { Component } from 'react';

import Home from './component/home'
import Map from './component/map'
import Projects from './component/projects'
import Photo from './component/photo'
import Sofc from './component/sofc'
import Affectiva from './component/affectiva'
import Infovis from './component/infovis'
import Splash from './component/splash'

import { Router, Route } from 'react-router-dom';
import history from './history'
import ScrollToTop from './scroll'




class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route path="/" component={Home} exact></Route>

          <ScrollToTop path="/projects" component={Projects} exact></ScrollToTop>
          <ScrollToTop path="/projects/map" component={Map}></ScrollToTop>

          <ScrollToTop path="/photo" component={Photo} exact></ScrollToTop>
          <ScrollToTop path="/projects/sofc" component={Sofc}></ScrollToTop>
          <ScrollToTop path="/projects/affectiva" component={Affectiva}></ScrollToTop>
          <ScrollToTop path="/projects/infovis" component={Infovis}></ScrollToTop>
          <ScrollToTop path="/projects/splash" component={Splash}></ScrollToTop>
        </div>

      </Router>

    );
  }
}

export default App;
