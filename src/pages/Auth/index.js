import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useDispatch} from "react-redux";
import {authUserRequest} from "../../redux/actions/actions";
import {history} from "../../helpers/history";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import '../MainPage/index.scss';


const Auth = () => {
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        password: '',
    })

    const handleChange = (el) => {
        setUser({
            ...user,
            [el.target.name]: el.target.value
        })
    }

    const onSubmit = (payload) => {
        dispatch(authUserRequest(payload))
        history.push('/')
    }

    return (
        <React.Fragment>
            <Header/>
            <Form className="auth-container" onSubmit={() => onSubmit(user)}>
                <Form.Text className="text-muted mb-3">
                    Please use your credentials.
                </Form.Text>
                <Form.Group controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name="firstName" onChange={handleChange} type="text" placeholder="First name"/>
                </Form.Group>
                <Form.Group controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="lastName" onChange={handleChange} type="text" placeholder="Last name"/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" onChange={handleChange} type="password" placeholder="Password"/>

                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Footer/>
        </React.Fragment>
    )
}

export default Auth