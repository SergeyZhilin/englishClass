import React, {Component} from 'react';
import {Button, Col, Form} from "react-bootstrap";

import QuestionsComponent from "../QuestionsComponent";
import SelectLevelsComponent from "../SelectLevelsComponent";
import Service from "../../services/service";
import Loader from "../Loader";

class MainPageComponent extends Component {
    service  = new Service()

    constructor(props) {
        super(props);
        this.getQuestions()
    }

    state = {
        openQuestions: false,
        questions: null,
        firstName: null,
        lastName: null,
        level: null,
        loading: true
    }

     getQuestions(level) {
        this.service.getTestByLevel(level)
            .then((questions) => {
                console.log(questions)
                this.setState({
                    questions,
                    loading: false
                })
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { level, openQuestions, questions } = this.state

        if( level && (!questions || level !== prevState.level )) {
            this.getQuestions(level)
        }

        if (level && !openQuestions && questions) {
            this.setState({
                openQuestions: true,
                loading: false
            })
        }
    }

    handleChange = (el) => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    onSubmit({lastName, firstName, level}) {
        this.service.submitTest({
            lastName,
            firstName,
            level
        })
    }

    render() {
        const { openQuestions, level, lastName, firstName, loading } = this.state;

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
                        <SelectLevelsComponent
                            label="Your English Level"
                            handleChange={this.handleChange}
                        />
                    </Form.Row>
                </Form>
                {
                     loading ? <Loader /> : openQuestions && (
                        <>
                            <QuestionsComponent data={this.state} />
                            <Button
                                disabled={!lastName || !firstName}
                                className="w-50 button"
                                variant="warning"
                                onClick={() => this.onSubmit({
                                    level,
                                    lastName,
                                    firstName
                            })}> Submit </Button>
                        </>
                    )
                }

            </div>
        )
    }
}

export default MainPageComponent