import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import {useDispatch, useSelector} from "react-redux";
import {getAllTestsRequest} from "../../redux/actions/actions";
import {personResult} from "../../helpers/helpers";
import {history} from "../../helpers/history";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnswersComponent from "../../components/AnswersComponent";

import '../MainPage/index.scss';

const Results = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)

    const person = useSelector(state => state.users.person)

    useEffect(() => {
        getTests()
    }, [])

    const handleClick = () => {
        localStorage.clear()
        window.location.replace('/auth')
    }

    const getTests = () => dispatch(getAllTestsRequest())

    if (!localStorage.getItem('user')) {
        history.push('/auth')
    }

    return (
        <React.Fragment>
            <Header/>
            <div className='results'>
                <h4> Your result: {personResult(person)} </h4>
                <Button className="btn-end btn" onClick={() => {
                    setOpen(!open)
                }}> Check the mistakes </Button>
                <Collapse in={open}>
                    <div id="list-item-collapse">
                        {
                            open
                                ? <AnswersComponent person={person}/>
                                : null
                        }
                    </div>
                </Collapse>
                <Button className="btn-end" onClick={handleClick}> Logout </Button>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Results