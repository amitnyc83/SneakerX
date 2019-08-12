import React, { Component } from 'react';


class SneakerContainer extends Component {

  mapSneaker = () => {
    return this.props.sneaker.map(sneaker => {
      return
       <div>
         <h3>{sneaker.name}</h3>
         <h3>{sneaker.price}</h3>
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
