import React, {Component} from 'react';
import Answers from "./Answers";
import Service from "../../services/service";

class AnswersComponent extends Component {
	service = new Service()

	constructor(props) {
		super(props);
		this.getAnswers()
	}

	state = {
		allAnswers: []
	}

	getAnswers() {
		this.service.getAllAnswers(`${this.props.person.firstName}-${this.props.person.lastName}`)
		.then((allAnswers) => {
			console.log(allAnswers)
			this.setState({
				allAnswers
			})
		})
	}

	render() {
		return (
			<React.Fragment>
				<div className="d-flex flex-column justify-content-center answers-list">
					{
						this.state.allAnswers.map(({question, answers}, index) => (
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