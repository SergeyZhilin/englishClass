import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import { checkAnswerStatus } from "../../../helpers/helpers";

const Answer = ({answer, rightAnswer, userAnswer, number}) => {
	const status = checkAnswerStatus(answer, rightAnswer, userAnswer)

	return (
		<ListGroup.Item className='answer' variant={status}>
			{`${number}. ${Object.values(answer)}`}
		</ListGroup.Item>
	)
}

const Answers = ({question, answers = [], rightAnswer,userAnswer,  number}) => {

	return (
		<React.Fragment>
			<div className='question'> {`${number}. ${question}`} </div>
			<ListGroup>
				{
					answers.map((answer, index) => (
						<Answer
						answer={answer}
						rightAnswer={rightAnswer}
						userAnswer={userAnswer}
						number={index + 1}
						key={index}
						/>
					))
				}
			</ListGroup>
		</React.Fragment>
	)
}

export default Answers;

