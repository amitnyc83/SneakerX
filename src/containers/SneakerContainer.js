import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSneakerCart } from '../actions/cart_actions'
import SneakerPage from '../components/SneakerPage';



class SneakerContainer extends Component {
  state = {
    clickedSneaker: null
  }

  mapSneaker = () => {
    return this.props.sneaker.map(sneaker => {
      return <div><SneakerPage key={sneaker.id} sneaker={sneaker} sneakerClicked={this.clickedSneaker}/></div>
    })
  }


  clickedSneaker = (sneakerClicked) => {
    this.setState({
      clickedSneaker: sneakerClicked
    })
  }

  clearState = () => {
    this.setState({
      clickedSneaker: null
    })
  }



  render() {
    return(
      <React.Fragment>
        { this.state.clickedSneaker === null ?
         this.mapSneaker() :
          <React.Fragment>
            <div id="sneaker-info-main-container">
             <img id="sneaker-info-image" src={this.state.clickedSneaker.image} alt="sneaker"/>
            <div>
             <div id="sneaker-info-brand">{this.state.clickedSneaker.brand}</div>
             <div id="sneaker-info-name">{this.state.clickedSneaker.name}</div>
             <div id="sneaker-info-price"> ${this.state.clickedSneaker.price}</div>
             <div id="sneaker-info-description"> {this.state.clickedSneaker.description}</div>
            </div>
           </div>
           <button onClick={this.clearState}>All Sneakers</button>
         </React.Fragment>
        }
      </React.Fragment>
    )
  }
}


export default SneakerContainer;
