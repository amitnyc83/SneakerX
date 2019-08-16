import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSneakerCart } from '../actions/cart-actions';
import SneakerPage from './SneakerPage';


class SneakerContainer extends Component {

  mapSneaker = () => {
    return this.props.sneaker.map(sneaker => {
      return
       <div>
         <SneakerPage key={sneaker.id} sneaker={sneaker} />
       </div>
    })
  }



  render() {
    return(
      <div>
       {this.mapSneaker()}
      </div>
    )
  }
}


export default SneakerContainer;
