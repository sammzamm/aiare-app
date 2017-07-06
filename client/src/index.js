import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ObservationalDataForm from './components/ObservationalDataForm.js';
import AllObservations from './components/AllObservations.js';
import SignUp from './components/SignUp.js';
import TripReport from './components/TripReport.js'
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Profile from './components/Profile.js';

ReactDOM.render(
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={App}></Route>
      <Route path="/observationsform" component={ObservationalDataForm}></Route>
      <Route path="/allobservations" component={AllObservations}></Route>
      <Route path="/observations" component={TripReport}></Route>
      <Route path="/signup" component={SignUp}></Route>
      <Route path="/myprofile" component={Profile}></Route>
      <Route path="/users" component={Profile}></Route>
    </div>

  </BrowserRouter>,

  document.getElementById('root')

);

registerServiceWorker();
