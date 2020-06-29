import React, { Component, Fragment } from 'react';
import Header from '../../header/header';
import Cards from '../../body/escolheAcao/cards/cards';
import Dialog from '../../body/escolheAcao/dialog/dialog';
import ConfigButton from '../../body/escolheAcao/configButton/configButton';
import Footer from '../../footer/footer';
import './escolheAcao.css';


class EscolheAcao extends Component {
    render() {
        return (
            <Fragment>
                <Header title="MG Revendedora" displayLinksProperty="none"/>
                <div className='container mb-10-cards'><Cards /></div>
                <Dialog />
                <ConfigButton />
                <Footer />
            </Fragment>
        )
    }
}
export default EscolheAcao;
