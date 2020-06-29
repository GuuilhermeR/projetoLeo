import React, { Fragment } from 'react';
import './notFound.css';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import Button from '@material-ui/core/Button';

const goToHome = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("idGestor", "");
    window.location.href = "/";
}

const NotFound = () =>{
    return (
        <Fragment>
            <Header title="Page Not Found" displayLinksProperty="none"/>
            <div className="not-found">OPS... Esta página não existe!</div>
            <div className="div-voltar-not-found"><Button className="btn-voltar-not-found" onClick={goToHome}>Voltar</Button></div>
            <Footer/>
        </Fragment>
    );
}
export default NotFound;