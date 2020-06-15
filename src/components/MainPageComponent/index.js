import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import {connect} from "react-redux";
import {
    getQuestionsByLevelRequest,
    submitDoneTestRequest
} from "../../redux/actions/actions";
import {disabled} from "../../helpers/helpers";
import {history} from "../../helpers/history";

import Service from "../../services/service";

import QuestionsComponent from "../QuestionsComponent";
import SelectLevelsComponent from "../SelectLevelsComponent";
import Loader from "../Loader";


class MainPageComponent extends Component {
    service  = new Service()

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getQuestions()
    }

    state = {
        openQuestions: false,
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

        if ( !localStorage.getItem('user') ) {
            history.push('/auth')
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
        const id = localStorage.getItem('user')
        if (!id) {
            alert('Login first')
            history.push('/auth')
        }
        return await this.props.submitTest({...payload, id})
    }

    render() {
        const { openQuestions, level, loading } = this.state;
        const { questionWithAnswer, questionsByLevel } = this.props;
        return (
            <div className="main-page container">
                <Form>
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
                            <QuestionsComponent data={questionsByLevel} />
                            <Button
                                disabled={disabled(questionWithAnswer, questionsByLevel)}
                                className="w-50 button"
                                variant="warning"
                                onClick={() => this.onSubmit({
                                    level,
                                    answers: questionWithAnswer
                                })}> Submit </Button>
                        </>
                    )
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return  {
        questionsByLevel: state.questionsByLevel,
        questionWithAnswer: state.questionWithAnswer,
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getQuestionsByLevel: (payload) => dispatch( getQuestionsByLevelRequest(payload) ),
        submitTest: (payload) => dispatch( submitDoneTestRequest(payload) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageComponent)