import React, { Component } from 'react';


class Header extends Component {
  render(){
    return(
      <div>
      <a class="active" href="#home">Home</a>
      <a href="/">Home</a>
      <a href="/login">LogIn</a>
      <a href="#about">About</a>
      </div>
    )
  }
}


export default Header
