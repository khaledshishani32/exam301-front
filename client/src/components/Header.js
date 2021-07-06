import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
export class Header extends Component {
    render() {
        return (
            <Nav  as="ul">
               <Nav.Item as="li">
                <Nav.Link href="#">Koktial</Nav.Link>
               </Nav.Item>
               <Nav.Item as="li">
            <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
             <Nav.Item as="li">
           <Nav.Link href="/favourite">Favourate</Nav.Link>
             </Nav.Item>
               </Nav>
        )
    }
}

export default Header
