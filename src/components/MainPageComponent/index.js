import React, {useEffect, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {
    getQuestionsByLevelRequest,
    submitDoneTestRequest
} from "../../redux/actions/actions";
import {disabled} from "../../helpers/helpers";
import {history} from "../../helpers/history";

import QuestionsComponent from "../QuestionsComponent";
import SelectLevelsComponent from "../SelectLevelsComponent";
import Loader from "../Loader";


const MainPageComponent = () => {
    const [level, setLevel] = useState(null);
    const dispatch = useDispatch()

    const questionsByLevel = useSelector(state => state.questions.questionsByLevel)
    const isLoading = useSelector(state => state.questions.loading)
    const questionWithAnswer = useSelector(state => state.questions.questionWithAnswer)

    const getQuestions = (level) => {
        dispatch(getQuestionsByLevelRequest(level));
    }

    useEffect(() => {
        if (level) {
            getQuestions(level)
        }
    }, [level])

    const onSubmit = (payload) => {
        const id = localStorage.getItem('user')
        if (!id) {
            alert('Login first')
            history.push('/auth')
        }
        return dispatch(submitDoneTestRequest({...payload, level, id}))
    }

    return (
        <div className="main-page container">
            <Form>
                <Form.Row>
                    <SelectLevelsComponent
                        label="Your English Level"
                        handleChange={(el) => setLevel(el.target.value)}
                    />
                </Form.Row>
            </Form>
            {
                (isLoading === null && <div> Select your level </div>)
                || (typeof isLoading === 'boolean' && isLoading && <Loader/>)
                || (typeof isLoading === 'boolean' && !isLoading && <>
                    <QuestionsComponent data={questionsByLevel}/>
                    <Button
                        disabled={disabled(questionWithAnswer, questionsByLevel)}
                        className="w-50 button"
                        variant="warning"
                        onClick={() => onSubmit({
                            answers: questionWithAnswer
                        })}> Submit </Button>
                </>)
            }
        </div>
    )
}

export default MainPageComponent