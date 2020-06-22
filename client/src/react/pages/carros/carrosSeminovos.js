import React, { Component, Fragment } from 'react';
import Header from '../../header/header';
import EncontraCarrosSeminovos from '../../body/encontraCarros/carrosSeminovos/carrosSeminovos';
import Footer from '../../footer/footer';


class CarrosSeminovos extends Component {
    render() {
        return (
            <Fragment>
                <Header title="Carros Seminovos"/>
                <EncontraCarrosSeminovos />
                <Footer />
            </Fragment>
        )
    }
}
export default CarrosSeminovos;
