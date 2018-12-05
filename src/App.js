import React, { Component } from 'react';

import Home from './component/home'
import Mines from './component/mines'
import Map from './component/map'
import Design from './component/design'
import { Router, Route } from 'react-router-dom';
import history from './history'




class App extends Component {
  render() {
    return (
      <Router history={history}>
      <div>
        <Route path="/" component={Home} exact></Route>
        <Route path="/design" component={Design} exact></Route>
          <Route path="/design/mines" component={Mines}></Route>
        <Route path="/design/map" component={Map}></Route>
          
          
        {/* <Route path="/user" component={UserPage}></Route>
        <Route path='/musicianReg' component={MusicianRegForm}></Route>
        <Route path='/usrReg' component={CustomerRegForm}></Route>
        <Route path='/profile/:value' name='profile' target="_blank" component={Profile}></Route>
        <Route path='/signin' component={SignInPage}></Route>
        <Route path='/musician' component={MusPage}></Route>
        <Route path='/search' component={Search}></Route>
        <Route path='/book' component={Book}></Route> */}

      </div>
      
      </Router>

    );
  }
}

export default App;
