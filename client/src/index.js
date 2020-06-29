import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './react/pages/home/home';
import EscolheCarros from './react/pages/escolheCarros/escolheCarros';
import CarrosNovos from './react/pages/carros/carrosNovos';
import CarrosSeminovos from './react/pages/carros/carrosSeminovos';
import DetalhesCarro from './react/pages/detalhesCarro/detalhesCarro';
import EscolheAcao from './react/pages/escolheAcao/escolheAcao';
import EscolheConfig from './react/pages/escolheConfig/escolheConfig';
import Login from './react/pages/login/login';
import CadastroGestor from './react/pages/cadastroGestores/cadastroGestores';
import CadastroCarros from './react/pages/cadastroCarros/cadastroCarros';
import AlteracaoSenha from './react/pages/alteracaoSenha/alteracaoSenha';
import TabelaCarros from './react/pages/edicaoCarros/tabelaCarros';
import FormEdicaoCarro from './react/pages/edicaoCarros/formEdicao';
import AutenticacaoSession from './autenticacao/autenticacaoSession';
import NotAuthenticated from './react/pages/notAuthenticated/notAuthenticated';
import NotFound from './react/pages/notFound/notFound';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        AutenticacaoSession.authorize() ? (
            <Component {...props} />
        ) : (
            <Redirect to= {{ pathname: "/notAuthenticated"}} />
        )
    )} /> 
)


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={Home} />
            <Route path='/escolheCarros' component={EscolheCarros} />
            <Route path='/carrosNovos' component={CarrosNovos} />
            <Route path='/carrosSeminovos' component={CarrosSeminovos} />
            <Route path='/detalhesCarro' component={DetalhesCarro} />
            <Route path='/login' component={Login} />
            <PrivateRoute path='/escolheAcao' component={EscolheAcao} />
            <PrivateRoute path='/escolheConfig' component={EscolheConfig} />
            <PrivateRoute path='/cadastroGestor' component={CadastroGestor} />
            <PrivateRoute path='/cadastroCarros' component={CadastroCarros} />
            <PrivateRoute path='/alteracaoSenha' component={AlteracaoSenha} />
            <PrivateRoute path='/tabelaCarros' component={TabelaCarros} />
            <PrivateRoute path='/formEdicaoCarro' component={FormEdicaoCarro} />
            <Route path='/notAuthenticated' component={NotAuthenticated} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)
