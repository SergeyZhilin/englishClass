import React, {Component} from 'react';
import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {connect} from "react-redux";
import {setQuestionWithAnswer} from "../../redux/actions/actions";

class ToggleButtonGroupControlled extends Component {

    handelChange = (event) => {
        const questionId = this.props.questionId
        this.props.setQuestionWithAnswer({ [questionId]: event})
    }

    render() {
        const { answers } = this.props
        return (
            <ToggleButtonGroup
                bsPrefix="outline-questions"
                type="radio"
                name="options"
                onChange={ this.handelChange}
            >
                <ToggleButton variant="outline-dark" value="answer_1">{answers.answer_1}</ToggleButton>
                <ToggleButton variant="outline-dark" value="answer_2">{answers.answer_2}</ToggleButton>
                <ToggleButton variant="outline-dark" value="answer_3">{answers.answer_3}</ToggleButton>
                <ToggleButton variant="outline-dark" value="answer_4">{answers.answer_4}</ToggleButton>
            </ToggleButtonGroup>
        );
    }
}


const mapStateToProps = (state) => {
    return  {
        questionWithAnswer: state.questionWithAnswer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setQuestionWithAnswer: (payload) => dispatch( setQuestionWithAnswer(payload) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleButtonGroupControlled)