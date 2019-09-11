import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



class CartSneakersContainer extends Component {


  render(){
    return(
      <div>
       { this.props.currentUser.user_id === this.props.sneakerCart.user_id ? this.props.sneakerCart.name : null }
      </div>
    )
  }
}

const mapStateToProps = ({user}) => {
  return {
    currentUser: user.user
  }
}




export default withRouter(connect(mapStateToProps)(CartSneakersContainer));
