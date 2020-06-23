import React from "react";
import ToggleButtonGroupControlled from "../../ToggleButtonGroupControlled";

const Question = (props) => {
    let index = props.listNumber;

    return (
        <div className="question-section">
            <p className="question-section__question">
                {++index}. {props.question.question}
            </p>
            <ToggleButtonGroupControlled
                questionId={props.questionId}
                answers={props.question}
            />
            <hr></hr>
        </div>
    );
}

export default Question;
