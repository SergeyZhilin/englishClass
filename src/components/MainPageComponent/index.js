import React, {Component} from 'react';
import {Button, Col, Form} from "react-bootstrap";

import QuestionsComponent from "../QuestionsComponent";
import SelectLevelsComponent from "../SelectLevelsComponent";
import Service from "../../services/service";

class MainPageComponent extends Component {
    service  = new Service()

    state = {
        openQuestions: false,
        questions: null,
        firstName: null,
        lastName: null,
        englishDefault: null,
        loading: true
    }

    async getQuestions(level) {
       const questions = await this.service.getTestByLevel(level)
        console.log('questions', questions)

        this.setState({
            questions
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { lastName, firstName, englishDefault, openQuestions, questions } = this.state

        if(lastName && firstName && englishDefault && (!questions || englishDefault !== prevState.englishDefault )) {
           return this.getQuestions(englishDefault)
        }

        if (lastName && firstName && englishDefault && !openQuestions &&questions) {
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

    onSubmit({lastName, firstName, englishDefault}) {
        this.service.submitTest({lastName, firstName, englishDefault})
    }

    render() {
        const {openQuestions, englishDefault, lastName, firstName, loading} = this.state;

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
                        <>
                            <QuestionsComponent data={this.state} />
                            <Button disabled={!lastName || !firstName} className="w-50 button" variant="warning" onClick={() => this.onSubmit({
                                englishDefault,
                                lastName,
                                firstName
                            })}>Submit</Button>
                        </>
                    )
                }

            </div>
        )
    }
}

export default MainPageComponent