import React, { Component } from 'react';

import Header from "../../components/Header";
import ListOfTests from "../../components/ListOfTests";
import Footer from "../../components/Footer";

import './index.scss'

class ListOfTestsPage extends Component {

    render() {
        return (
            <React.Fragment>
                <Header/>
                 <ListOfTests />
                <Footer/>
            </React.Fragment>
        )
    }
}

export default ListOfTestsPage