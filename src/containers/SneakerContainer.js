import React, { Component } from 'react';
import SneakerPage from '../components/SneakerPage';


class SneakerContainer extends Component {

  mapSneaker = () => {
    return this.props.sneaker.map(sneaker => {
      return <div><SneakerPage key={sneaker.id} sneaker={sneaker} /></div>
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
