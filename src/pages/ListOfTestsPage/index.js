import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllTestsRequest} from "../../redux/actions/actions";

import Header from "../../components/Header";
import ListOfTests from "../../components/ListOfTests";
import Footer from "../../components/Footer";

import './index.scss'


const ListOfTestsPage = () => {
    const dispatch = useDispatch()
    const allTests = useSelector(state => state.tests.allTests)

    useEffect(() => {
        getTests()
    }, [])

    const getTests = () => dispatch(getAllTestsRequest())

    return (
        <React.Fragment>
            <Header/>
            <ListOfTests allTests={allTests}/>
            <Footer/>
        </React.Fragment>
    )

}


export default ListOfTestsPage