import React, { Component, Fragment } from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';


class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header title="MG Revendedora"/>
                <Footer />
            </Fragment>
        )
    }
}
export default Home;
