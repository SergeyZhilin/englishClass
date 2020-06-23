import React from "react";
import Col from "react-bootstrap/Col";
import ListOfTestsItem from "./ListOfTestsItem";
import Loader from "../Loader";

const ListOfTests = ({allTests}) => {
    return (
        <div className="list-of-tests">
            <Col className="list-item-info border-b" sm="auto">
                <h5> Name </h5>
                <Col md="6" xs="8" lg="4">
                    <h5> Level </h5>
                    <div style={{
                        justifyContent: 'flex-end'
                    }}>
                        <h5> Right Answers </h5>
                    </div>
                    <span></span>
                </Col>
            </Col>
            {
                allTests ? allTests.map((person, i) => {
                    return <ListOfTestsItem person={person} key={i}/>
                }) : <Loader/>
            }
        </div>
    )
}

export default ListOfTests;