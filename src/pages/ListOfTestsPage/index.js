import React, {Component} from 'react';

import Header from "../../components/Header";
import ListOfTests from "../../components/ListOfTests";
import Footer from "../../components/Footer";
import Service from "../../services/service";

import './index.scss'

class ListOfTestsPage extends Component {

    service = new Service()

    state = {
        allTests: []
    }

   async componentDidMount() {
        const allTests = await this.service.getAllTests()
        this.setState({
            allTests
        })
    }



    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <Header/>
                 <ListOfTests allTests={this.state.allTests} />
                <Footer/>
            </React.Fragment>
        )
    }
}

export default ListOfTestsPage