import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';

// store
import store from './store';

// features
import About from './features/About';
import Home from './features/Home';

// components
import Navbar from './components/Navbar';

render(
    <Provider store={ store }>
        <BrowserRouter>
            <main>
                <Navbar></Navbar>
                <Switch>
                    <Route exact path="/" component={ Home }></Route>
                    <Route exact path="/about" component={ About }></Route>
                </Switch>
            </main>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
