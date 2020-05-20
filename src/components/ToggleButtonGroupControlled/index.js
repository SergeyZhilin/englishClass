import React, {Component} from 'react';
import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";

class ToggleButtonGroupControlled extends Component {
    render() {
        return (
            <ToggleButtonGroup bsPrefix="outline-questions" type="radio" name="options">
                <ToggleButton variant="outline-dark" value={1}>Radio 1</ToggleButton>
                <ToggleButton variant="outline-dark" value={2}>Radio 2</ToggleButton>
                <ToggleButton variant="outline-dark" value={3}>Radio 3</ToggleButton>
                <ToggleButton variant="outline-dark" value={4}>Radio 4</ToggleButton>
            </ToggleButtonGroup>
        );
    }
}

export default ToggleButtonGroupControlled;