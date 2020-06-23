import React, {Component, useState} from "react";
import {useSelector} from "react-redux";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import {personResult} from "../../../helpers/helpers";

import AnswersComponent from "../../AnswersComponent";

import arrowUp from "../../../assets/image/arrow-up.svg"
import arrowDown from "../../../assets/image/arrow-down.svg"


const ListOfTestsItem = ({person}) => {
    const [open, setOpen] = useState(false)
    const questionsCount = useSelector(state => state.questions.allAnswers)

    return (
        <div className="list-item-wrapper">
            <div className="list-item-info">
                <Col> {person.firstName} {person.lastName} </Col>
                <Col md="6" xs="8" lg="4">
                    <div> {person.level} </div>
                    <div style={{
                        justifyContent: 'center'
                    }}> {personResult(person)} </div>
                    <Button
                        type="button"
                        variant="light"
                        className="arrow-btn"
                        onClick={() => {
                            setOpen(!open)
                        }}
                    >
                        {
                            open
                                ? <img alt="arrow" src={arrowUp}/>
                                : <img alt="arrow" src={arrowDown}/>
                        }
                    </Button>
                </Col>
            </div>
            <Collapse in={open}>
                <div id="list-item-collapse">
                    {
                        open && person.answers
                            ? <AnswersComponent person={person}/>
                            : null
                    }

                </div>
            </Collapse>
        </div>
    )
}

export default ListOfTestsItem