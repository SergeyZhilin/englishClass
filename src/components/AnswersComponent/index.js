import React, {Component} from 'react';
import Answers from "./Answers";
import Service from "../../services/service";

class AnswersComponent extends Component {
	service = new Service()

	state = {
		allAnswers: []
	}

	async componentDidMount() {
		const allAnswers = await this.service.getAllAnswers(`${this.props.person.firstName}_${this.props.person.lastName}`)
		this.setState({
			allAnswers
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