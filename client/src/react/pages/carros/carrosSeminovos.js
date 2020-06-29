import React, { Component, Fragment } from 'react';
import Header from '../../header/header';
import EncontraCarrosSeminovos from '../../body/encontraCarros/carrosSeminovos/carrosSeminovos';
import Footer from '../../footer/footer';
import Button from '@material-ui/core/Button';

const goToEscolheCarros = () => {
    window.location.href = "/escolheCarros";
}

class CarrosSeminovos extends Component {
    render() {
        return (
            <Fragment>
                <Header title="Carros Seminovos" displayLinksProperty="initial"/>
                <EncontraCarrosSeminovos />
                <div className="div-btn-escolhe-carros">
                    <Button className="btn-voltar-escolhe-carros" onClick={goToEscolheCarros}>Voltar</Button>
                </div>
                <Footer />
            </Fragment>
        )
    }
}
export default CarrosSeminovos;
