import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



class CartSneakersContainer extends Component {


  render(){
    return(
      <div>
       { this.props.currentuser.user_id === this.props.sneakercart.user_id ? this.props.productCart.name : null }
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
