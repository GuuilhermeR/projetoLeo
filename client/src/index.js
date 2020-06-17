import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './react/pages/home/home';
import EscolheCarros from './react/pages/escolheCarros/escolheCarros';
import Login from './react/pages/login/login';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


//const PrivateRoute = ({component: Component, ...rest}) => (
//    <Route {...rest} render={props => (
//        AutenticacaoSession.authorize() ? (
//            <Component {...props} />
//        ) : (
//            <Redirect to= {{ pathname: "/NotAuthenticated"}} />
//        )
//    )} /> 
//)


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={Home} />
            <Route path='/escolheCarros' component={EscolheCarros} />
            <Route path='/login' component={Login} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)
