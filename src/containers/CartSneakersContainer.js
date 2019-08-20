import React, { Component } from 'react';
// import { connect } from 'react-redux';


class CartSneakersContainer extends Component {


  render(){
    return(
      <div>
      {this.props.sneakerCart.name}
      </div>
    )
  }
}


export default CartSneakersContainer;
