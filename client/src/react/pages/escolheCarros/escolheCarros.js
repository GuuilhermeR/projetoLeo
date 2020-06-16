import React, { Component, Fragment } from 'react';
import Header from '../../header/header';
import ChooseCard from '../../body/escolheCarros/chooseCard';
import Footer from '../../footer/footer';


class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header title="MG Revendedora"/>
                <ChooseCard />
                <Footer />
            </Fragment>
        )
    }
}
export default Home;
