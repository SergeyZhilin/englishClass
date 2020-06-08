import React, {Component} from 'react';
import ToggleButtonGroupControlled from "../../ToggleButtonGroupControlled";

class Question extends Component {

    state  = {}

    handelChange = (e) => {
        this.setState((prevState) => ({
            ...prevState,
            [this.props.question.id]: e
            }))
        console.log(this.props.question.id)
    }

    render() {
        console.log(this.state)
        return (
            <div className="question-section">
                <p className="question-section__question">
                    {this.props.question.question}
                </p>
                <ToggleButtonGroupControlled
                    answers={this.props.question}
                    handelChange={this.handelChange}
                />
            </div>
        )
    }
}

export default Question;