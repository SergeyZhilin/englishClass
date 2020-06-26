import React from "react";
import Question from "./Question";

const QuestionsComponent = ({data}) => {
    return (
        <>
            <p>
                <b>Please answer these questions</b>
            </p>
            <div className="container d-flex flex-column justify-content-left">
                {
                    data &&
                    data.map((question, index) => {
                        return (
                            <Question
                                questionId={question.id}
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
