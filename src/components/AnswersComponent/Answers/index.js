import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Answer from "./Answer";

const Answers = ({question, answers = [], rightAnswer, userAnswer, number}) => {
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

