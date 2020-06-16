import React, { Component } from "react";
import ToggleButtonGroupControlled from "../../ToggleButtonGroupControlled";

class Question extends Component {
  render() {
    let index = this.props.listNumber;
    return (
      <div className="question-section">
        <p className="question-section__question">
          {++index}. {this.props.question.question}
        </p>
        <ToggleButtonGroupControlled
          questionId={this.props.questionId}
          answers={this.props.question}
          handelChange={this.props.handelChange}
        />
        <hr></hr>
      </div>
    );
  }
}

export default Question;
