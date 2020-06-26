import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {isAdmin} from "../../helpers/helpers";
import {useSelector} from "react-redux";

const Header = () => {
    const user = useSelector(state => state.users.user)

    const handleClick = () => {
        localStorage.clear()
        window.location.replace('/auth')
    }

    return (
        <Navbar bg="dark" variant="dark" className="justify-content-between">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={"/logo.svg"}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                English Class
            </Navbar.Brand>
            <Nav>
                {
                    isAdmin(user) && (
                        <>
                            <Nav.Link href="/list">List Of Test</Nav.Link>
                            <Nav.Link href="/add-test">Add New Test Items</Nav.Link>
                        </>

                    )
                }
                {
                    window.location.pathname !== '/auth' &&
                    <Nav.Link onClick={handleClick}>Logout</Nav.Link>
                }
            </Nav>
        </Navbar>
    )
}

export default Header