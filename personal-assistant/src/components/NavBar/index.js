import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Styles } from './styles'
import Logo from '../../assets/checkicon.png'

export const NavigationBar = () => (
    <Styles>
        <Navbar bg="light" variant="light" expand="lg">
            <Navbar.Brand href="/">
                <div class="logo-image">
                    <img src={Logo} class="img-fluid"/>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav navbar-nav navbar-right">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/todo">Todo</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)