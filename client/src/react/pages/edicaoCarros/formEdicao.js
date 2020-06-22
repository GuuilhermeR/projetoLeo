import React, { Component, Fragment } from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import FormEditaCarros from '../../body/edicaoCarros/formEditCar/formEditCar';


class FormEdicao extends Component {
    render() {
        return (
            <Fragment>
                <Header title="Edição do Carro"/>
                <FormEditaCarros />
                <Footer />
            </Fragment>
        )
    }
}
export default FormEdicao;
