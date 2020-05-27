import React, {Component} from 'react';
import Answers from "./Answers";
// fake data
import {ANSWERS_DATA} from "../../data";

class AnswersComponent extends Component {
	render() {

		return (
			<React.Fragment>
				<div className="d-flex flex-column justify-content-center answers-list">
					{
						ANSWERS_DATA.map(({question, answers}, index) => (
							<Answers
								question={question}
								answers={answers}
								key={index}
								number={index + 1}
							/>
						))
					}
				</div>
			</React.Fragment>
		)
	}
}

export default AnswersComponent