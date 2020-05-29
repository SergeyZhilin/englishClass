import React, {Component} from "react";
import Col from "react-bootstrap/Col";
import ListOfTestsItem from "./ListOfTestsItem";


class ListOfTests extends Component {
	render() {
		return (
			<div className="list-of-tests">
				<Col className="list-item-info border-b" sm="auto">
					<h5> Name </h5>
					<Col md="6" xs="8" lg="4" >
						  <h5> Level </h5>
						  <h5> Right Answers</h5>
							<span></span>
					</Col>
				</Col>
				{
					this.props.allTests.map((person, i) => <ListOfTestsItem person={person} key={i}/>)
				}
			</div>
		)
	}
}

export default ListOfTests;