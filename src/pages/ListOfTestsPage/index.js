import React, {Component} from 'react';
import {connect} from "react-redux";
import {getAllTestsRequest} from "../../redux/actions/actions";

import Header from "../../components/Header";
import ListOfTests from "../../components/ListOfTests";
import Footer from "../../components/Footer";

import './index.scss'


class ListOfTestsPage extends Component {

    constructor(props) {
        super(props);
        this.getTests()
    }

    getTests = async () => await this.props.getAllTests()

    render() {
        return (
            <React.Fragment>
                <Header/>
                <ListOfTests allTests={this.props.allTests} />
                <Footer/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return  {
        allTests: state.allTests
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllTests: () => dispatch( getAllTestsRequest() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfTestsPage)