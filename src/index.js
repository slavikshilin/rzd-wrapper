import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { store } from './store/configureStore'
import './index.css';
import Login from './pages/login';
import Home from './pages/home';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';

function isLoggedIn() {
    return localStorage.getItem('cks_token') !== null
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={() => (
                    isLoggedIn() ? (
                        <Home to="/"/>
                    ) : (
                        <Redirect to="/login" push={true} />
                    )
                )}/>
                <Route path='/login' component={Login}/>
            </Switch>            
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
