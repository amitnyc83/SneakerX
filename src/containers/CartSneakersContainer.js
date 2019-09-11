import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



class CartSneakersContainer extends Component {


  render(){
    return(
      <div>
        { this.props.currentUser.user_id === this.props.sneakerCart.user_id ?
          <React.Fragment>
           <div>{this.props.sneakerCart.name}</div>
           <div>Total Price: {this.props.sneakerCart['total_price']}</div>
           <div>Quantity: ${this.props.sneakerCart.quantity * this.props.sneakerCart['total_price']}</div>
          </React.Fragment>
        : null }
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
