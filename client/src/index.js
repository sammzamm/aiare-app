import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ObservationalDataForm from './components/ObservationalDataForm.js';
import Observations from './components/Observations.js';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={App}></Route>
      <Route path="/observations" component={ObservationalDataForm}></Route>
      <Route path="/allObservations" component={Observations}></Route>
    </div>

  </BrowserRouter>,

  document.getElementById('root')

);

registerServiceWorker();
