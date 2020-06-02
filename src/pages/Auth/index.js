import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Service from "../../services/service";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import '../MainPage/index.scss';
import {Redirect} from "react-router-dom";



class Auth extends Component {
    service = new Service()

    state = {
        redirect: null
    }

    handleChange = (el) => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    onSubmit(loginData) {
        this.service.loginUser(loginData)
            .then((res) => {
               this.setState({
                   redirect: true
               })
            })
    }

    render() {
        const { firstName, lastName, password, redirect} = this.state

        if (redirect) {
            return <Redirect from="/auth" to="/" />
        }

        return (
            <React.Fragment>
                <Header/>
                <Form as={"div"} className="auth-container">
                <Form.Text className="text-muted mb-3">
                    Please use your credentials.
                </Form.Text>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name="firstName" onChange={this.handleChange} type="text" placeholder="First name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="lastName" onChange={this.handleChange} type="text" placeholder="Last name" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" onChange={this.handleChange} type="password" placeholder="Password" />

                </Form.Group>
                <Button variant="primary" type="submit" onClick={() => this.onSubmit({
                    firstName,
                    lastName,
                    password
                })}>
                    Submit
                </Button>
            </Form>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Auth