import React, {Component} from 'react';

import MainPageComponent from "../../components/MainPageComponent";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import './index.scss';

class MainPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <MainPageComponent />
                <Footer/>
            </React.Fragment>
        )
    }
}

export default MainPage