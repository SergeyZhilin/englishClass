import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import {connect} from "react-redux";
import {getAllTestsRequest} from "../../redux/actions/actions";
import {history} from "../../helpers/history";
import {personResult} from "../../helpers/helpers";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnswersComponent from "../../components/AnswersComponent";

import '../MainPage/index.scss';



class Results extends Component {
    constructor(props) {
        super(props);
        this.getTests()
    }

    handleClick() {
        localStorage.clear()
        window.location.replace('/auth')
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
                    <Button  className="btn-end btn" onClick={() => {
                        this.setState((prevState) => {
                            return {open: !prevState.open}
                        })}}> Check the mistakes </Button>
                    <Collapse in={open}>
                        <div id="list-item-collapse">
                            {
                                open
                                    ? <AnswersComponent person={this.props.person}/>
                                    : null
                            }
                        </div>
                    </Collapse>
                    <Button className="btn-end" onClick={this.handleClick}> Logout </Button>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return  {
        allTests: state.allTests,
        person: state.person,
        questionsByLevel: state.questionsByLevel
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllTests: () => dispatch( getAllTestsRequest() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)