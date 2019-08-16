import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSneakerCart } from '../actions/cart_actions';


class SneakerPage extends Component {
  state = {
    selectedSneaker: '',
    quantitySelected: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }




  handleSubmit = (event, quantity) => {
    event.preventDefault()
    cartSneaker['quantity'] = this.state.quantitySelected;
    this.setState({
      selectedSneaker: cartSneaker
    })


    this.props.addSneakerCart(cartSneaker)

    fetch(`http://localhost:3001/carts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        nam: cartSneaker.name,
        quantity: cartSneaker.quantity,
        total_price: 10,
        ordered: false,
        user_id: 1,
        product_id: cartSneaker.id
      })
    }).then(response => response.json())
  }.then(cart => console.log(cart))


  render(){
    const { sneaker } = this.props
    return(
      <div>
       <form onSubmit={(event) => this.handleSubmit(event, sneaker)}>
       <div>Name: {sneaker.name}</div>
       <div>Price: {sneaker.price}</div>
       <div>Number Items in Stock: {sneaker.quantity}</div>
        <input
        value={this.state.value}
        type='text'
        onChange={(event) => this.handleChange(event, sneaker)} />
        <button>Add To Cart</button>
        </form>
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    addSneakerCart: (selectedSneaker) => dispatch(addSneakerCart(selectedSneaker))
  }
}

export default connect(null, mapDispatchToProps)(SneakerPage);
