import React, {Component} from 'react';
import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {setQuestionWithAnswer} from "../../redux/actions/actions";
import {connect} from "react-redux";

class ToggleButtonGroupControlled extends Component {

    handelChange = (event) => {
        const questionId = this.props.questionId
        this.props.setQuestionWithAnswer({ [questionId]: event})
    }

    render() {
        return (
            <ToggleButtonGroup
                bsPrefix="outline-questions"
                type="radio"
                name="options"
                onChange={ this.handelChange}
            >
                <ToggleButton variant="outline-dark" value="1">{this.props.answers.answer_1}</ToggleButton>
                <ToggleButton variant="outline-dark" value="2">{this.props.answers.answer_2}</ToggleButton>
                <ToggleButton variant="outline-dark" value="3">{this.props.answers.answer_3}</ToggleButton>
                <ToggleButton variant="outline-dark" value="4">{this.props.answers.answer_4}</ToggleButton>
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