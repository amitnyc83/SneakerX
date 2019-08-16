import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getSneakers } from '../actions/sneaker_actions';
import SellerSneakerContainer from '../containers/SellerSneakerContainer';

class SellerPage extends Component {

  componentDidMount() {
    this.props.getSneakers()
  }

  mapSneakers = () => {
    return (this.props.sneakerItems.allSneaker ? <SellerSneakerContainer sneaker={this.props.sneakerItems.allSneakers} /> : null )
  }

  render() {
    return(
      <React.Fragment>
       Welcome to your Seller Page
       {this.mapSneakers()}
      </React.Fragment>
    )
  }
}

const mapStateToProps =({sneakers}) => {
  return {
    sneakerItems: sneakers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSneakers: () => dispatch(getSneakers())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SellerPage);
