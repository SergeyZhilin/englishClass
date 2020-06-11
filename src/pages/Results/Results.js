import React, {Component} from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import '../MainPage/index.scss';
import {Button} from "react-bootstrap";
import {history} from "../../helpers/history";
import Collapse from "react-bootstrap/Collapse";
import AnswersComponent from "../../components/AnswersComponent";
import {personResult} from "../../helpers/helpers";


class Results extends Component {
    constructor(props) {
        super(props);
        this.getTests()
    }

    handleClick() {
     localStorage.clear()
     history.push('/auth')
    }

    state = {
        open: false,
        person: null,
    }

    getTests = async () => await this.props.getAllTests()


    render() {
        const { open } = this.state

        return (
            <React.Fragment>
                <Header/>
                <div className='results'>
                    <h4> Your result: {personResult(this.props.person)} </h4>
                    <span onClick={() => {
                        this.setState((prevState) => {
                           return {open: !prevState.open}
                        })}}> See mistake </span>
                    <Collapse in={open}>
                        <div id="list-item-collapse">
                            {
                             open
                                ? <AnswersComponent person={this.props.person}/>
                                : null
                            }
                        </div>
                    </Collapse>
                    <Button className="btn-end" onClick={this.handleClick}> End Test </Button>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Results