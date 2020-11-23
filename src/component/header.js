import React from 'react';
import { Navbar, Nav, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
export default function Header() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Navbar.Brand>Google Books</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link>
                        <NavLink to="/search" className="link">Search</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to="/saved" className="link">Saved</NavLink>
                    </Nav.Link>
                </Nav>
            </Navbar>
            <Card style={{ width: '100%' }}>
                <Card.Body>
                     <Card.Text className="text-center">
                         <h1>(React) Google Book Search</h1>
                         Search for and saved Books for interest
                    </Card.Text>
                 </Card.Body>
            </Card>
        </>
    );
}