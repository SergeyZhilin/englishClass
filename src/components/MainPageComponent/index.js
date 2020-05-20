import React, {Component} from 'react';
import {Col, Form} from "react-bootstrap";
import QuestionsComponent from "../QuestionsComponent";

class MainPageComponent extends Component {

    state = {
        openQuestions: false,
        firstName: null,
        lastName: null,
        englishDefault: null,
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {lastName, firstName, englishDefault, openQuestions} = this.state

        if (lastName && firstName && englishDefault && !openQuestions) {
            this.setState({
                openQuestions: true
            })
        }
    }

    handleChange = (el) => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    render() {
        const {openQuestions} = this.state;
        return (
            <div className="main-page">
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text"
                                          placeholder="First Name"
                                          name="firstName"
                                          onChange={this.handleChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text"
                                          placeholder="Last Name"
                                          name="lastName"
                                          onChange={this.handleChange}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Your English Level</Form.Label>
                            <Form.Control as="select"
                                          defaultValue="Choose..."
                                          name="englishDefault"
                                          onChange={this.handleChange}
                            >
                                <option disabled>Choose...</option>
                                <option value='beginner'>Beginner</option>
                                <option value='elementary'>Elementary</option>
                                <option value='pre-intermediate'>Pre-Intermediate</option>
                                <option value='intermediate'>Intermediate</option>
                                <option value='upper-intermediate'>Upper Intermediate</option>
                                <option value='advanced'>Advanced</option>
                                <option value='mastery'>Mastery</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                </Form>
                {
                    openQuestions && (
                        <QuestionsComponent/>
                    )
                }
            </div>
        )
    }
}

export default MainPageComponent