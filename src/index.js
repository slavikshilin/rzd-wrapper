import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, BrowserRouter } from 'react-router-dom'
import { store } from './store/configureStore'
import './index.css';
import Login from './pages/login';
import Home from './pages/home';
import registerServiceWorker from './registerServiceWorker';

function isLoggedIn() {
    return localStorage.getItem('cks_token') !== null
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route exact path='/' render={() => (
                isLoggedIn() ? (
                    <Home to="/"/>
                ) : (
                    <Login />
                )
            )}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
