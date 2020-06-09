import React, {Component} from 'react';
import Answers from "./Answers";
import Service from "../../services/service";
import Loader from "../Loader";

class AnswersComponent extends Component {
    service = new Service()

    constructor(props) {
        super(props);
        this.getAnswers()
    }

    getAnswers = async () => {
        await this.props.getAllAnswers(`${this.props.person.firstName}-${this.props.person.lastName}`)

    }

    render() {
        return (
            <React.Fragment>
                <div className="d-flex flex-column justify-content-center answers-list">
                    {
                        this.props.allAnswers ? this.props.allAnswers.map(({ question, answers}, index) => (
                            <Answers
                                question={question}
                                answers={answers}
                                key={index}
                                number={index + 1}
                            />
                        )) : <Loader />
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default AnswersComponent