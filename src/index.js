import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import About from './components/About'
import Store from './components/Store'
import { BrowserRouter, Route,Redirect } from 'react-router-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <BrowserRouter>
  	<div>
      <Redirect to='/home' />
	    <Route path="/home" component={App}/>
	    <Route path="/about" component={About}/>
	    <Route path="/store" component={Store}/>
      
    </div>
  </BrowserRouter>
    , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
