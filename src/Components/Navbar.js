import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'





class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return(
      <Menu color='black' inverted widths={8}>
        <Menu.Item header href='/'>SneakerX</Menu.Item>
        <Menu.Item
          href='/'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          href='/login'
          name='login'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
        />
      <Menu.Item
        href='/signup'
        name='signup'
        active={activeItem === 'signup'}
        onClick={this.handleItemClick}
        />
        <Menu.Item
          href='/seller'
          name='seller'
          active={activeItem === 'seller'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          href='/cart'
          name='cart'
          active={activeItem === 'cart'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          href='/about'
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}


export default NavBar;
