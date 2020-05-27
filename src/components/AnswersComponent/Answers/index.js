import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";

const Answers = ({question, answers = [], number}) => {
	return (
		<React.Fragment>
			<div className='question'> {`${number}. ${question}`} </div>
			<ListGroup>
				{answers.map((answer, index) => <Answer
					answer={answer}
					number={index + 1}
					key={index} />)}
			</ListGroup>
		</React.Fragment>
	)
}

export default Answers;

const Answer = ({answer, number}) => {
	console.log(answer)
	return (
			<ListGroup.Item className='answer' variant={answer.status}>
				{`${number}. ${answer.answer}`}
			</ListGroup.Item>
	)
}
