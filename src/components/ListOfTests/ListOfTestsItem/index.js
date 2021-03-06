import React, {Component} from "react";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import {connect} from "react-redux";
import {personResult} from "../../../helpers/helpers";

import AnswersComponent from "../../AnswersComponent";

import arrowUp from "../../../assets/arrow-up.svg"
import arrowDown from "../../../assets/arrow-down.svg"


class ListOfTestsItem extends Component {

	state = {
		open: false,
	}

	render() {
		const { open } = this.state
		const { person} = this.props
		return (
			<div className="list-item-wrapper">
				<div className="list-item-info">
					<Col> {person.firstName} {person.lastName} </Col>
					<Col md="6" xs="8" lg="4">
						<div> {person.level} </div>
						<div style = {{
							justifyContent: 'center'
						}}> {personResult(person)} </div>
						<Button
							type="button"
							variant="light"
							className="arrow-btn"
							onClick={() => {
								this.setState((prevState) => ({
										open: !prevState.open
									}))
							}}
						>
							{ this.state.open
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
}

const mapStateToProps = state => {
	return {
		questionsCount: state.allAnswers
	}
}

export default connect(mapStateToProps)(ListOfTestsItem)