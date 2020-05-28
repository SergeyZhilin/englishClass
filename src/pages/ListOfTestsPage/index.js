import React, { Component } from 'react';

import Header from "../../components/Header";
import ListOfTests from "../../components/ListOfTests";
import Footer from "../../components/Footer";
import Service from "../../services/service";

import './index.scss'

class ListOfTestsPage extends Component {

    service = new Service()

    state = {
        people: []
    }

    componentDidMount() {
        const people = this.getAllPeople()
        console.log(people)
        this.setState({
            people
        })
    }

    getAllPeople = () => {
        return this.service.getAllTests()
    }

    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <Header/>
                 <ListOfTests people={this.state.people} />
                <Footer/>
            </React.Fragment>
        )
    }
}

export default ListOfTestsPage