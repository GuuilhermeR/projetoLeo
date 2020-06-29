import React, { Component, Fragment } from 'react';
import Header from '../../header/header';
import CardHome from '../../body/login/login';
import Footer from '../../footer/footer';


class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header title="MG Revendedora" displayLinksProperty="initial"/>
                <CardHome />
                <Footer />
            </Fragment>
        )
    }
}
export default Home;
