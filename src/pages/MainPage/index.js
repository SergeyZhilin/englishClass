import React from 'react';

import MainPageComponent from "../../components/MainPageComponent";
import Header from "../../components/Header";

import Footer from "../../components/Footer";
import './index.scss';

const MainPage = () => {

    return (
        <React.Fragment>
            <Header/>
            <MainPageComponent/>
            <Footer/>
        </React.Fragment>
    )
}

export default MainPage