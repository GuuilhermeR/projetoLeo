import React, { Component, Fragment } from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import FormCadastro from '../../body/cadastroCarros/cadastroCarros';


class CadastroCarros extends Component {
    render() {
        return (
            <Fragment>
                <Header title="Cadastro de Carros" />
                <FormCadastro />
                <Footer />
            </Fragment>
        )
    }
}
export default CadastroCarros;
