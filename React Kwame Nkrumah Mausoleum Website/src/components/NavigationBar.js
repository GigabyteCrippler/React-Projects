import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';



const Styles = styled.div`

background-color: #A9A9A9 ;

.navbar-brand , .navbar-nav , .navbar-link{
    color : #bbb ;

    &:hover {
        color:white ;
    }
} `
;
export const NavigationBar = () => (

    <Styles>
        <Navbar expand="lg ">

            <Navbar.Brand href="/" > Kwame Nkrumah Memorial Park & Mausoleum  </Navbar.Brand>

            <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav " >

                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/"> Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about"> About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact"> Contact</Nav.Link></Nav.Item>
                </Nav>

            </Navbar.Collapse>

        </Navbar>
    </Styles>
)