import React, {Component} from 'react';
import Question from "./Question";

class QuestionsComponent extends Component {
	state  = {
		answers: []
	}

	handelChange = (e, questionId) => {
		this.setState((prevState) => ({
			...prevState,
			[questionId]: e
		}))
	}

	questionId = []
	render() {

		return (
			<>
				<p>Please answer these questions</p>
				<div className="container d-flex flex-column justify-content-center">
					{
						this.props.data &&
						(this.props.data.map((question, index) => {
							this.questionId.push(question.id)
							return <Question
								questionId={this.questionId[index]}
								question={question}
								key={index}
								handleChange={this.handelChange}
							/>
						}))
					}
				</div>
			</>
		)
	}
}

export default QuestionsComponent