import React, { Component, Fragment } from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import TabelaEscolheCarro from '../../body/edicaoCarros/tableCar/tableCar';


class TabelaCarros extends Component {
    render() {
        return (
            <Fragment>
                <Header title="Escolhe Carro" displayLinksProperty="none"/>
                <TabelaEscolheCarro />
                <Footer />
            </Fragment>
        )
    }
}
export default TabelaCarros;
