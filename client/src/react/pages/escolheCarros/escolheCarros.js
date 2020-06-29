import React, { Component, Fragment } from 'react';
import Header from '../../header/header';
import ChooseCard from '../../body/escolheCarros/chooseCard';
import Footer from '../../footer/footer';
import Button from '@material-ui/core/Button';
import './escolheCarros.css';

const voltarEscolheCarros = () => {window.location.href = "/"}

class EscolheCarros extends Component {
    render() {
        return (
            <Fragment>
                <Header title="MG Revendedora" displayLinksProperty="initial"/>
                <div className='container mb-10'><ChooseCard /></div>
                <div className="div-btn-escolhe-carros">
                    <Button className="btn-voltar-escolhe-carros" onClick={voltarEscolheCarros}>Voltar</Button>
                </div>
                <Footer />
            </Fragment>
        )
    }
}
export default EscolheCarros;
