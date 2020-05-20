import React, {Component} from 'react';
import {Nav, Navbar} from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" className="justify-content-between">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={"/logo.svg"}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    English Class
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href="/list">List Of Test</Nav.Link>
                    <Nav.Link href="/add-test">Add New Test Items</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Header