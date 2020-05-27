import React, {Component} from 'react';
import Question from "./Question";
import {Button} from "react-bootstrap";
//fake data
import {QUESTIONS} from "../../data";

class QuestionsComponent extends Component {
	render() {
		//@todo
		return (
			<>
				<p>Please answer these questions</p>
				<div className="container d-flex flex-column justify-content-center">
					{
						QUESTIONS.map((question, index) => (
							<Question key={index}/>
						))
					}
					<Button className="w-50 m-auto" variant="warning">Submit</Button>
				</div>
			</>
		)
	}
}

export default QuestionsComponent