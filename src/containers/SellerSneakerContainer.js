import React, { Component } from 'react';
import AddSneakerForm from '../components/AddSneakerForm'


class SellerSneakerContainer extends Component {

  sellersProducts = () => {
    return this.props.sneaker.filter(sneaker => {
      return sneaker['seller_id'] === 1
    }).map(sneakerInfo =>  {
      return <div>
        <label>Name</label>
        <h4>{sneakerInfo.name}</h4>
        <label>Brand</label>
        <h4>{sneakerInfo.brand}</h4>
        <label>Price</label>
        <h4>{sneakerInfo.price}</h4>
        <label>Description</label>
        <h4>{sneakerInfo.description}</h4>
      </div>
    })
  }

  render() {
    return(
      <React.Fragment>
      Seller's Sneaker Info
      {this.sellersSneakers()}
      <AddSneakerForm />
      </React.Fragment>
    )
  }
}


export default SellerSneakerContainer
