import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSneakers } from '../actions/sneaker_actions'
import SneakerContainer from '../containers/SneakerContainer'

class HomePage extends Component {


  componentDidMount() {
    this.props.fetchSneakers()
  }

  mapSneaker = () => {
    return(this.props.sneakerItems.Sneakers[0] ?
    <SneakerContainer sneaker={this.props.sneakerItems.Sneakers[0]} /> : null)
  }




  render() {
    return(
      <div className="Home">
      Welcome to Sneaker X
      {this.mapSneakers()}
      </div>
    )
  }
}

const mapStateToProps = ({sneakers}) => {
  return {
    sneakers: sneakers
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchSneakers: () => dispatch(fetchSneakers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
