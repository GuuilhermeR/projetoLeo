import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './escolheConfig.css';
import Header from '../../header/header';
import Icons from '../../body/escolheConfig/icons';
import Footer from '../../footer/footer';
import Button from '@material-ui/core/Button';

const goToEscolheAcao = () => {
    window.location.href = "escolheAcao";
}

class EscolheConfig extends Component {
    render() {
        return (
            <Fragment>
                <Header title="Configurações" displayLinksProperty="none"/>
                <Icons />
                <div className="div-btn-voltar-config"><Button className="btn-voltar-config" onClick={goToEscolheAcao}>Voltar</Button></div>
                <Footer/>
            </Fragment>
        )
    }
}
export default EscolheConfig;
