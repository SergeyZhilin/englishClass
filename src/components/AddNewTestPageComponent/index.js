import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import SelectLevelsComponent from "../SelectLevelsComponent";

class AddNewTestPageComponent extends Component {

	state = {}

	handleChange = (el) => {
		this.setState({
			[el.target.name]: el.target.value
		})
	}

	render() {
		return (
			<div className="container mt-lg-5">
				<Form>
					<Form.Row>
						<SelectLevelsComponent label="Select English Level" handleChange={this.handleChange}/>
					</Form.Row>
					<Form.Group className="mb-lg-4" controlId="exampleForm.ControlTextarea1">
						<Form.Label>Question</Form.Label>
						<Form.Control as="textarea" rows="3"/>
					</Form.Group>
					<Form.Group className="mb-lg-4">
						<Form.Label>Possible answer</Form.Label>
						<Form.Control type="text" />
					</Form.Group>
					<Form.Group className="mb-lg-4">
						<Form.Label>Possible answer</Form.Label>
						<Form.Control type="text"/>
					</Form.Group>
					<Form.Group className="mb-lg-4">
						<Form.Label>Possible answer</Form.Label>
						<Form.Control type="text"/>
					</Form.Group>
					<Form.Group className="mb-lg-4">
						<Form.Label>Possible answer</Form.Label>
						<Form.Control type="text"/>
					</Form.Group>
					<Form.Group controlId="exampleForm.ControlSelect2">
						<Form.Label>Select Right Answer</Form.Label>
						<Form.Control as="select" name="rightAnswer" onChange={this.handleChange}>
							<option value={1}>1</option>
							<option value={2}>2</option>
							<option value={3}>3</option>
							<option value={4}>4</option>
						</Form.Control>
					</Form.Group>
					<Button variant="primary">
						Submit
					</Button>
				</Form>
			</div>
		)
	}
}

export default AddNewTestPageComponent