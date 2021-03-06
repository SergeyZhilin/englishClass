import React, {Component} from 'react';
import {connect} from "react-redux";
import { Button, Form } from "react-bootstrap";
import Service from "../../services/service";
import {addNewTestRequest} from "../../redux/actions/actions";

import SelectLevelsComponent from "../SelectLevelsComponent";

class AddNewTestPageComponent extends Component {
	service = new Service()
	state = {}

	answerName = ['answer_1', 'answer_2', 'answer_3', 'answer_4']

	handleChange = (el) => {
		this.setState({
			[el.target.name]: el.target.value
		})
	}

	onSubmit = async (newTest) => await this.props.addNewTest(newTest)

	render() {
		return (
			<div className="container mt-lg-5">
				<Form>
					<Form.Row>
						<SelectLevelsComponent label="Select English Level" handleChange={this.handleChange}/>
					</Form.Row>
					<Form.Group className="mb-lg-4" controlId="exampleForm.ControlTextarea1">
						<Form.Label>Question</Form.Label>
						<Form.Control onChange={this.handleChange} name="question" as="textarea" rows="3"/>
					</Form.Group>
					{
						this.answerName.map(name => (
							<Form.Group className="mb-lg-4" key={name}>
								<Form.Label>Possible answer</Form.Label>
								<Form.Control onChange={this.handleChange} name={name} type="text" />
							</Form.Group>
						))
					}
					<Form.Group controlId="exampleForm.ControlSelect2">
						<Form.Label>Select Right Answer</Form.Label>
						<Form.Control defaultValue="Select Right Answer..." as="select" name="rightAnswer" onChange={this.handleChange}>
							<option disabled>Select Right Answer...</option>
							<option value="answer_1">1</option>
							<option value="answer_2">2</option>
							<option value="answer_3">3</option>
							<option value="answer_4">4</option>
						</Form.Control>
					</Form.Group>
					<Button variant="primary" onClick={() => this.onSubmit(this.state)}>
						Submit
					</Button>
				</Form>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addNewTest: (payload) => dispatch( addNewTestRequest(payload))
	}
}

export default connect(null, mapDispatchToProps)(AddNewTestPageComponent)