import React, {Component} from 'react';
import ToggleButtonGroupControlled from "../../ToggleButtonGroupControlled";

class Question extends Component {
    render() {
        return (
            <div className="question-section">
                <p className="question-section__question">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Purus in mollis nunc sed.
                </p>
                <ToggleButtonGroupControlled />
            </div>
        )
    }
}

export default Question;