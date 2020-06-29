import React, { Component, Fragment } from 'react';
import Header from '../../header/header';
import EncontraCarrosNovos from '../../body/encontraCarros/carrosNovos/carrosNovos';
import Footer from '../../footer/footer';
import Button from '@material-ui/core/Button';

const goToEscolheCarros = () => {
    window.location.href = "/escolheCarros";
}

class CarrosNovos extends Component {
    render() {
        return (
            <Fragment>
                <Header title="Carros Novos" displayLinksProperty="initial"/>
                <EncontraCarrosNovos />
                <div className="div-btn-escolhe-carros">
                    <Button className="btn-voltar-escolhe-carros" onClick={goToEscolheCarros}>Voltar</Button>
                </div>
                <Footer />
            </Fragment>
        )
    }
}
export default CarrosNovos;
