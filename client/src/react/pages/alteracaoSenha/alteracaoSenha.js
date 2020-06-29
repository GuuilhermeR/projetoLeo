import React, { Component, Fragment } from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import FormAlteracao from '../../body/alteracaoSenha/formAlteracao';


class AlteraSenha extends Component {
    render() {
        return (
            <Fragment>
                <Header title="Alteração de senha" displayLinksProperty="none"/>
                <FormAlteracao />
                <Footer />
            </Fragment>
        )
    }
}
export default AlteraSenha;
