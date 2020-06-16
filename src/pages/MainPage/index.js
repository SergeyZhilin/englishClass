import React, {Component} from 'react';
import {history} from "../../helpers/history";

import MainPageComponent from "../../components/MainPageComponent";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import './index.scss';

class MainPage extends Component {
    render() {

        if ( !localStorage.getItem('user') ) {
            history.push('/auth')
        }

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