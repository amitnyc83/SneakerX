import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSneakers } from '../actions/sneaker_actions';
import SellerSneakerContainer from '../containers/SellerSneakerContainer';
import { withRouter } from 'react-router-dom';

class SellerPage extends Component {

  componentDidMount() {
    let token = localStorage.getItem('token')
   console.log(token)
   if (token) {
     fetch(`http://localhost:3001/current_user`, {
       headers: {
         "Content-Type": "application/json",
         Accepts: "application/json",
         Authorization: token
       }
     }).then(response => response.json())
     .then(resp => {
       console.log(resp);
       this.props.fetchSneakers()
     })
    }
   else {
     console.log('inside the else', this.props.history);;
     this.props.history.push('/login')
   }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.sneakerItems.allSneakers.length !== this.props.sneakerItems.allSneakers.length) {
      this.props.fetchSneakers()
    }
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
    fetchSneakers: () => dispatch(fetchSneakers())
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SellerPage));
