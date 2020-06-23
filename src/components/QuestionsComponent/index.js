import React from "react";
import Question from "./Question";

const QuestionsComponent = ({data}) => {

    const questionId = [];

    return (
        <>
            <p>
                <b>Please answer these questions</b>
            </p>
            <div className="container d-flex flex-column justify-content-left">
                {
                    data &&
                    data.map((question, index) => {
                        questionId.push(question.id);
                        return (
                            <Question
                                questionId={questionId[index]}
                                question={question}
                                key={index}
                                listNumber={index}
                            />
                        );
                    })}
            </div>
        </>
    );
}

export default QuestionsComponent;
