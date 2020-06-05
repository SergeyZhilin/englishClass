import React, {Component} from 'react';
import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";

class ToggleButtonGroupControlled extends Component {

    render() {
        return (
            <ToggleButtonGroup
                bsPrefix="outline-questions"
                type="radio"
                name="options"
                onChange={this.props.handelChange}
            >
                <ToggleButton variant="outline-dark" value="1">{this.props.answers.answer_1}</ToggleButton>
                <ToggleButton variant="outline-dark" value="2">{this.props.answers.answer_2}</ToggleButton>
                <ToggleButton variant="outline-dark" value="3">{this.props.answers.answer_3}</ToggleButton>
                <ToggleButton variant="outline-dark" value="4">{this.props.answers.answer_4}</ToggleButton>
            </ToggleButtonGroup>
        );
    }
}

export default ToggleButtonGroupControlled;