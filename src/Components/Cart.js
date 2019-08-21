import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCart } from '../actions/cart_actions';
import CartSneakersContainer from '../containers/CartSneakersContainer'
import {withRouter} from 'react-router-dom'


class Cart extends Component {

  componentDidMount(){
    let token = localStorage.getItem('token')
    if (token) {
      fetch(`http://localhost:3001/current_user`, {
        headers: {
          "Content-Type": "application/json",
          Accepts: "application/json",
          Authorization: token
        }
      }).then(response => response.json())
      .then(resp => {
        this.props.fetchCart()
      })
     }
    else {
      this.props.history.push('/login')
    }
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


export default withRouter (connect(mapStateToProps, mapDispatchToProps)(Cart));
