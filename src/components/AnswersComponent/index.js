import React, {Component} from 'react';
import {connect} from "react-redux";
import Service from "../../services/service";
import { getAllAnswersRequest } from "../../redux/actions/actions";

import Answers from "./Answers";

class AnswersComponent extends Component {
	service = new Service()

	state = {
		user: null
	}

	constructor(props) {
		super(props);
		this.getAnswers()
	}

	componentDidMount() {
		const user = localStorage.getItem('params')
		this.setState({
			user
		})
	}

	getAnswers = async () => {
		await this.props.getAllAnswers(`${this.props.person.firstName}-${this.props.person.lastName}`)
	}

	render() {

		return (
			<React.Fragment>
				<div className="d-flex flex-column justify-content-center answers-list">
					{
						this.props.allAnswers[this.state.user]
						&& this.props.allAnswers[this.state.user].map(({ question, answers, rightAnswer, userAnswer}, index) => (
							<Answers
								question={question}
								answers={answers}
								rightAnswer={rightAnswer}
								userAnswer={userAnswer}
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

const mapStateToProps = (state) => {
	return  {
		allAnswers: state.allAnswers,
		userAnswer: state.userAnswer
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getAllAnswers: (payload) => dispatch( getAllAnswersRequest(payload) )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswersComponent)