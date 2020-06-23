import React from "react";
import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {setQuestionWithAnswer} from "../../redux/actions/actions";

const ToggleButtonGroupControlled = ({answers, questionId}) => {
    const dispatch = useDispatch()

    const handelChange = (event) => {
        dispatch(setQuestionWithAnswer({[questionId]: event}));
    }

    return (
        <ToggleButtonGroup
            bsPrefix="outline-questions"
            type="radio"
            name="options"
            onChange={handelChange}
        >
            <ToggleButton variant="outline-dark" value="answer_1">
                {answers.answer_1}
            </ToggleButton>
            <ToggleButton variant="outline-dark" value="answer_2">
                {answers.answer_2}
            </ToggleButton>
            <ToggleButton variant="outline-dark" value="answer_3">
                {answers.answer_3}
            </ToggleButton>
            <ToggleButton variant="outline-dark" value="answer_4">
                {answers.answer_4}
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

export default ToggleButtonGroupControlled
