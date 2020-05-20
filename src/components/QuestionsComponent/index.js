import React, {Component} from 'react';
import Question from "./Question";
import {Button} from "react-bootstrap";

class QuestionsComponent extends Component {
    render() {
        //@todo
        const questionsArray = new Array(null, null, null, null, null, null, null, null, null, null, null, null);
        return (
            <>
                <p>Please answer this questions</p>
                <div className="container d-flex flex-column justify-content-center">
                    {
                        questionsArray.map((question, index) => (
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