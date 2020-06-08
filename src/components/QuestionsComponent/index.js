import React, {Component} from 'react';
import Question from "./Question";

class QuestionsComponent extends Component {
	state  = {}

	handelChangeAnswer = (e) => {
		this.setState((prevState) => ({
			...prevState,
			// : e
			}))
	}

	render() {
		console.log(this.props.data.questions)

		console.log(this.state)
		return (
			<>
				<p>Please answer these questions</p>
				<div className="container d-flex flex-column justify-content-center">
					{
						this.props.data.questions &&
						(this.props.data.questions.map((question, index) => {
							return <Question
								question={question}
								key={index}
								handleChange={this.handelChangeAnswer}
							/>
						}))
					}
				</div>
			</>
		)
	}
}

export default QuestionsComponent