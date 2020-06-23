import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Button, Form} from "react-bootstrap";
import {addNewTestRequest} from "../../redux/actions/actions";

import SelectLevelsComponent from "../SelectLevelsComponent";

const AddNewTestPageComponent = () => {
    const [state, setState] = useState({})
    const dispatch = useDispatch()

    const answerName = ['answer_1', 'answer_2', 'answer_3', 'answer_4']

    const handleChange = (el) => {
        setState({
            ...state,
            [el.target.name]: el.target.value
        })
    }

    const onSubmit = async (newTest) => {
        dispatch(addNewTestRequest(newTest))
    }

    return (
        <div className="container mt-lg-5">
            <Form onSubmit={() => onSubmit(state)}>
                <Form.Row>
                    <SelectLevelsComponent label="Select English Level" handleChange={handleChange}/>
                </Form.Row>
                <Form.Group className="mb-lg-4" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Question</Form.Label>
                    <Form.Control onChange={handleChange} name="question" as="textarea" rows="3"/>
                </Form.Group>
                {
                    answerName.map(name => (
                        <Form.Group className="mb-lg-4" key={name}>
                            <Form.Label>Possible answer</Form.Label>
                            <Form.Control onChange={handleChange} name={name} type="text"/>
                        </Form.Group>
                    ))
                }
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Select Right Answer</Form.Label>
                    <Form.Control defaultValue="Select Right Answer..." as="select" name="rightAnswer"
                                  onChange={handleChange}>
                        <option disabled>Select Right Answer...</option>
                        <option value="answer_1">1</option>
                        <option value="answer_2">2</option>
                        <option value="answer_3">3</option>
                        <option value="answer_4">4</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type='submit'>
                    Submit
                </Button>
            </Form>
        </div>
    )
}


export default AddNewTestPageComponent