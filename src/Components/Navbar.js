import React, { Component } from 'react';
import  Nav from 'react-bootstrap/Nav'
import  Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


class Navibar extends Component {
  render(){
    return(
      <Container>
       <Navbar bg="dark" variant="dark">
         <Navbar.Brand class="active" href="/">SneakerX</Navbar.Brand>
         <Nav className="mr-auto">
           <Nav.Link href="/home">Home</Nav.Link>
           <Nav.Link href="/login">Login</Nav.Link>
           <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    )
  }
}


export default Navibar
