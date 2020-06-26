import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {history} from "../../helpers/history";
import icon from '../../assets/image/undo-24px.svg'

import '../MainPage/index.scss';

const Page404 = () => {
    return (
        <React.Fragment>
            <Header/>
            <div className='page404'>
                <h1> Page not found </h1>
                <p onClick={history.goBack}> <img src={icon} alt=''/> Go back </p>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Page404