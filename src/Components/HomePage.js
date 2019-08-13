import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSneakers } from '../actions/sneaker_actions'
import SneakerContainer from '../containers/SneakerContainer'

class HomePage extends Component {


  componentDidMount() {
    this.props.fetchSneakers()
  }

  mapSneakers = () => {
    console.log("mapping", this.props.sneakerItems )

    return(this.props.sneakerItems.sneakers[0] ?
    <SneakerContainer sneaker={this.props.sneakerItems.sneakers[0]} /> : null)
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
    sneakerItems: sneakers
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchSneakers: () => dispatch(fetchSneakers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
