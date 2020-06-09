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
        firstName: null,
        lastName: null,
        level: null,
        loading: true
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { level, openQuestions } = this.state

        if( level && (!this.props.questionsByLevel || level !== prevState.level )) {
            this.getQuestions(level)
        }

        if (level && !openQuestions && this.props.questionsByLevel) {
            this.setState({
                openQuestions: true,
                loading: false
            })
        }
    }

    async getQuestions (level)  {
       const questions = await this.props.getQuestionsByLevel(level)
        this.setState({
            loading: false
        })
        return questions
    }

    handleChange = (el) => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    onSubmit = async (payload) => {
        return await this.props.submitTest(payload)
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
                            <QuestionsComponent data={this.props.questionsByLevel} />
                            <Button
                                disabled={!lastName || !firstName}
                                className="w-50 button"
                                variant="warning"
                                onClick={() => this.onSubmit({
                                    level,
                                    lastName,
                                    firstName,
                                    answers: this.props.questionWithAnswer
                                })}> Submit </Button>
                        </>
                    )
                }

            </div>
        )
    }
}

export default MainPageComponent