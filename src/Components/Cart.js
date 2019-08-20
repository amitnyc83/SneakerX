import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCart } from '../actions/cart_actions';
import CartSneakersContainer from '../containers/CartSneakersContainer'


class Cart extends Component {

  componentDidMount(){
    this.props.fetchCart()
  }


  render() {
    return(
      <div>
      Welcome to your Cart!
      {this.props.cartSneakers.carts ? this.props.cartSneakers.carts.map(cart => <CartSneakersContainer key={cart.id} sneakerCart={cart} />) : <div>Your Cart is currently empty</div>}
      </div>
    )
  }
}


const mapStateToProps = ({cartSneakers}) => {
  return {
    cartSneakers: cartSneakers.cartSneakers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => dispatch(fetchCart())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
