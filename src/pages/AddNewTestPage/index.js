import React from 'react';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AddNewTestPageComponent from "../../components/AddNewTestPageComponent";

const AddNewTestPage = () => {
    return (
        <React.Fragment>
            <Header/>
            <AddNewTestPageComponent/>
            <Footer/>
        </React.Fragment>
    )
}

export default AddNewTestPage