import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllAnswersRequest} from "../../redux/actions/actions";

import Answers from "./Answers";
import Loader from "../Loader";

const AnswersComponent = ({person}) => {
    const dispatch = useDispatch()
    const allAnswers = useSelector(state => state.questions.allAnswers)
    const isLoading = useSelector(state => state.questions.loading)

    useEffect(() => {
        getAnswers()
        // localStorage.getItem('user')
    }, [])

    const getAnswers = () => {
        dispatch(getAllAnswersRequest(`${person.firstName}-${person.lastName}`))
    }

    return (
        <React.Fragment>
            <div className="d-flex flex-column justify-content-center answers-list">
                {
                    (typeof isLoading === 'boolean' && isLoading && <Loader/>)
                    || (typeof isLoading === 'boolean' && !isLoading &&
                        allAnswers && allAnswers[person.id]
                        && allAnswers[person.id].map(({question, answers, rightAnswer, userAnswer}, index) => {
                            return (
                                <Answers
                                    question={question}
                                    answers={answers}
                                    rightAnswer={rightAnswer}
                                    userAnswer={userAnswer}
                                    key={index}
                                    number={index + 1}
                                />
                            )
                        }))
                }
            </div>
        </React.Fragment>
    )
}


export default AnswersComponent