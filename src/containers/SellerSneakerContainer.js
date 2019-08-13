import React, { Component } from 'react';


class SellerSneakerContainer extends Component {

  sellersProducts = () => {
    return this.props.sneaker.filter(sneaker => {
      return sneaker['seller_id'] === 1
    }).map(sneakerInfo => {
      return <div> {sneakerInfo.name} </div>
    })
  }

  render() {
    return(
      <React.Fragment>
      Seller's Sneaker Info
      {this.sellersSneakers()}
      </React.Fragment>
    )
  }
}


export default SellerSneakerContainer
