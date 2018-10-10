// Code Here
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute,browserHistory} from 'react-router';
import {Provider} from 'react-redux'; 
import store from './store.js';
import app from './components/mainscript';
import MainComponent from './components/main.component';
import MarketDetails from './components/market.details.component';
import  './marquee2.css';


var router = <Provider store={store}>     
            <Router history={browserHistory}> 
                <Route path="/" component={app}>
                <IndexRoute component={MarketDetails}></IndexRoute>
                </Route>
             </Router>
             </Provider>


ReactDOM.render(router, document.getElementById('content'));
