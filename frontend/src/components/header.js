import Container from 'react-bootstrap/Container';
import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = ({ title }) => {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">{title}</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;