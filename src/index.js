import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { store } from './store/configureStore'
import './index.css';
import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';

function isLoggedIn() {
    console.log('node_env: ', process.env.NODE_ENV)
    return localStorage.getItem('cks_token') !== null
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={() => (
                    isLoggedIn() ? (
                        <HomePage to="/"/>
                    ) : (
                        <Redirect to="/login" push={true} />
                    )
                )}/>
                <Route path='/login' component={LoginPage}/>
            </Switch>            
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
