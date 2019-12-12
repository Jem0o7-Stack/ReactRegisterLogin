import React, { Component } from 'react';
import ReactDOM from "react-dom";
import HomePage from '../src/Home/HomePage';
import { BrowserRouter, Route, HashRouter, browserHistory, Router } from 'react-router';
import About from '../src/About';


ReactDOM.render(
    <Router history={browserHistory}>
        <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/About" component={About} />
        </div>
    </Router>,
    document.getElementById('root')
);