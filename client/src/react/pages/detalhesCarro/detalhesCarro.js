import React, { Component, Fragment } from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import DetalhesCarroBody from '../../body/detalhesCarro/detalhesCarro';


class DetalhesCarro extends Component {
    render() {
        return (
            <Fragment>
                <Header title="Detalhes do Veículo" displayLinksProperty="initial"/>
                <DetalhesCarroBody />
                <Footer />
            </Fragment>
        )
    }
}
export default DetalhesCarro;
