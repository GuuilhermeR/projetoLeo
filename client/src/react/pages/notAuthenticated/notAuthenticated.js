import React, { Fragment } from 'react';
import './notAuthenticated.css';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import Button from '@material-ui/core/Button';

const goToHome = () =>{
    window.location.href = "/login";
}

const NotAuthenticated = () =>{
    return (
        <Fragment>
            <Header title="Área Restrita"/>
            <div className="not-authenticated">OPS... Você não tem permissão para acessar esta página!<br/>Logue no sistema para continuar!</div>
            <div className="div-voltar-authenticated"><Button className="btn-voltar-authenticated" onClick={goToHome}>Voltar</Button></div>
            <Footer/>
        </Fragment>
    );
}
export default NotAuthenticated;