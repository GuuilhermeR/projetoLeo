import React, { Component, Fragment } from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import FormCadastro from '../../body/cadastroGestor/cadastroGestor';


class CadastroGestor extends Component {
    render() {
        return (
            <Fragment>
                <Header title="Cadastro de Gestor"/>
                <FormCadastro />
                <Footer />
            </Fragment>
        )
    }
}
export default CadastroGestor;
