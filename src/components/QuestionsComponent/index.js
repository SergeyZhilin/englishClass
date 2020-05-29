import React, {Component} from 'react';
import Question from "./Question";
import Loader from "../Loader";

class QuestionsComponent extends Component {

	render() {
		return (
			<>
				<p>Please answer these questions</p>
				<div className="container d-flex flex-column justify-content-center">
					{
						this.props.data.questions
							? (this.props.data.questions.map((question, index) => (<Question key={index}/>)))
							: <Loader />
					}
				</div>
			</>
		)
	}
}

export default QuestionsComponent