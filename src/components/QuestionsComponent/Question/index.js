import React, {Component} from 'react';
import ToggleButtonGroupControlled from "../../ToggleButtonGroupControlled";

class Question extends Component {

    render() {
        return (
            <div className="question-section">
                <p className="question-section__question">
                    {this.props.question.question}
                </p>
                <ToggleButtonGroupControlled
                    answers={this.props.question}
                    handelChange={this.props.handelChangeAnswer}
                />
            </div>
        )
    }
}

export default Question;