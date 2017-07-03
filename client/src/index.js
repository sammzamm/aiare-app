import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ObservationalDataForm from './components/ObservationalDataForm.js';
import AllObservations from './components/AllObservations.js';
import SignUp from './components/SignUp.js';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={App}></Route>
      <Route path="/observationsform" component={ObservationalDataForm}></Route>
      <Route path="/allobservations" component={AllObservations}></Route>
      <Route path="/signup" component={SignUp}></Route>

    </div>

  </BrowserRouter>,

  document.getElementById('root')

);

registerServiceWorker();
