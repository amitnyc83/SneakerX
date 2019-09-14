import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSneakerCart } from '../actions/cart_actions';
import IndividualSneakerInfo from './IndividualSneakerInfo';


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
    .then(cart => {
      this.props.addSneakerCart(cart)
    })
  }

  clickedSneaker = (event, clickedSneaker) => {
    this.props.sneakerClicked(clickedSneaker)
  }


  render(){
    const { sneaker } = this.props

    let quantityArray = []
    for (let i = 1; i < parseInt(sneaker.quantity); i++){
      quantityArray.push(i)
    }
    return(
      <div>
       <form onSubmit={(event) => this.handleSubmit(event, sneaker)}>
       <div>Name: {sneaker.name}</div>
       <div>Price: {sneaker.price}</div>
       <div>Number of Items in Stock: {sneaker.quantity}</div>
       <div><img src={sneaker.image} alt='' onClick={(event) => this.clickedSneaker(event, sneaker)}/></div>
       {parseInt(sneaker.quantity) > 0 ?
       <React.Fragment>
          <select onChange={(event) => this.handleChange(event, sneaker)}
           name="quantitySelected"
           class="shop icon"><option value="0">Quantity</option>
           {quantityArray.map(num => <option value={num.toSTring()}>{num}</option>)}
          </select>
          <div class="extra">
            <button class="ui primary button"><i class="shop icon"></i>Add To Cart</button>
          </div>
        </React.Fragment> : <span>Sold Out</span>}
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
