import React, {Component} from 'react';
import {Col, Form} from "react-bootstrap";

import QuestionsComponent from "../QuestionsComponent";
import SelectLevelsComponent from "../SelectLevelsComponent";

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
            <div className="main-page container">
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
                        <SelectLevelsComponent label="Your English Level" handleChange={this.handleChange}/>
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