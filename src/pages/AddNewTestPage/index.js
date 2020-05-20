import React, {Component} from 'react';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AddNewTestPageComponent from "../../components/AddNewTestPageComponent";

class AddNewTestPage extends Component {

    render() {
        return (
            <React.Fragment>
                <Header/>
                <AddNewTestPageComponent/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default AddNewTestPage