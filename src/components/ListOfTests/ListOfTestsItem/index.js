import React, {useState} from "react";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import AnswersComponent from "../../AnswersComponent";

import arrowUp from "../../../assets/arrow-up.svg"
import arrowDown from "../../../assets/arrow-down.svg"
import {QUESTIONS} from "../../../data";

const ListOfTestsItem = ({person}) => {
	const [open, setOpen] = useState(false);
	const arrow = open
		? <img alt="arrow" src={arrowUp}/>
		: <img alt="arrow" src={arrowDown}/>

	return (
		<div className="list-item-wrapper">
			<div className="list-item-info">
				<Col> {person.firstName} {person.lastName} </Col>
				<Col md="6" xs="8" lg="4">
					<div> {person.level} </div>
					<div> {person.rightAnswerCount}/{QUESTIONS.length} </div>
					<Button
						type="button"
						variant="light"
						className="arrow-btn"
						onClick={() => setOpen((prevState) => !prevState)}
					>
						{arrow}
					</Button>
				</Col>
			</div>
			<Collapse in={open}>
				<div id="list-item-collapse">
					<AnswersComponent />
				</div>
			</Collapse>
		</div>
	)
}

export default ListOfTestsItem