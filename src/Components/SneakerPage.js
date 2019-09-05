import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSneakerCart } from '../actions/cart_actions';


class SneakerPage extends Component {
  state = {
    selectedSneaker: '',
    quantitySelected: ''
  }

  handleChange = (event) => {
    this.setState({
      quantitySelected: event.target.value
    })
  }




  handleSubmit = (event, cartSneaker ) => {
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
        name: cartSneaker.name,
        quantity: cartSneaker.quantity,
        total_price: 10,
        ordered: false,
        user_id: this.props.currentUser.user_id,
        product_id: cartSneaker.id
      })
    }).then(response => response.json())
    .then(cart => console.log(cart))
  }


  render(){
    const { sneaker } = this.props
    return(
      <div>
       <form onSubmit={(event) => this.handleSubmit(event, sneaker)}>
       <div>Name: {sneaker.name}</div>
       <div>Price: {sneaker.price}</div>
       <div>Number of Items in Stock: {sneaker.quantity}</div>
       <div><img src={sneaker.image} alt=''/></div>
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

const mapStateToProps = ({user}) => {
  return {
    currentUser: user.user
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addSneakerCart: (selectedSneaker) => dispatch(addSneakerCart(selectedSneaker))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SneakerPage);
