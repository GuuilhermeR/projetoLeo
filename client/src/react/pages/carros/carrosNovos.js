import React, { Component, Fragment } from 'react';
import Header from '../../header/header';
import EncontraCarrosNovos from '../../body/encontraCarros/carrosNovos/carrosNovos';
import Footer from '../../footer/footer';

class CarrosNovos extends Component {
    render() {
        return (
            <Fragment>
                <Header title="Carros Novos"/>
                <EncontraCarrosNovos />
                <Footer />
            </Fragment>
        )
    }
}
export default CarrosNovos;
