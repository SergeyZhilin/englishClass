import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";
import {authUserRequest} from "../../redux/actions/actions";
import Service from "../../services/service";
import { history } from "../../helpers/history";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import '../MainPage/index.scss';


class Auth extends Component {
    service = new Service()

    state = {}

    handleChange = (el) => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    onSubmit(payload) {
        this.props.authUser(payload)
        history.push('/')
    }

    render() {

        if (localStorage.getItem('user')) {
            history.push('/')
        }

        return (
            <React.Fragment>
                <Header/>
                <Form as={"div"} className="auth-container">
                    <Form.Text className="text-muted mb-3">
                        Please use your credentials.
                    </Form.Text>
                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control name="firstName" onChange={this.handleChange} type="text" placeholder="First name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control name="lastName" onChange={this.handleChange} type="text" placeholder="Last name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" onChange={this.handleChange} type="password" placeholder="Password" />

                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={() => this.onSubmit(this.state)}>
                        Submit
                    </Button>
                </Form>
                <Footer/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authUser: (payload) => dispatch( authUserRequest(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)