import {checkAnswerStatus} from "../../../helpers/helpers";
import ListGroup from "react-bootstrap/ListGroup";
import React from "react";

const Answer = ({answer, rightAnswer, userAnswer, number}) => {
    const status = checkAnswerStatus(answer, rightAnswer, userAnswer)

    return (
        <ListGroup.Item className='answer' variant={status}>
            {`${number}. ${Object.values(answer)}`}
        </ListGroup.Item>
    )
}

export default Answer