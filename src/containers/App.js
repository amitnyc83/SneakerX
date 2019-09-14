import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import HomePage from '../components/HomePage';
import NavBar from '../components/NavBar';
import Cart from '../components/Cart';
import SellerPage from '../components/SellerPage';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import IndividualProductInfo from '../components/IndividualSneakerInfo'
import { currentUser } from '../actions/user_actions';
import { BrowserRouter as Router, Switch, withRouter, Route } from 'react-router-dom';

class App extends Component {

  componentDidMount = () => {
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
       this.props.currentUser(resp)
        if (resp.type === "Seller"){
         this.props.history.push("/seller")
        }
        else if (resp.type === "Customer"){
         this.props.history.push("/cart")
        }
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/login" exact render={(renderProps) => (<SignInForm renderProps={renderProps} />)} />
          <Route path="/signup" exact render={(renderProps) => (<SignUpForm renderProps={renderProps} />)} />
          <Route path="/" exact render={() => (<HomePage />)} />
          <Route path="/cart" exact render={(renderProps) => (<Cart />)} />
          <Route path="/seller" exact render={() => (<SellerPage />)} />
        </Switch>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    currentUser: (theuser) => {dispatch({type: "CURRENT_USER", payload: theuser})},
  }
}

 export default withRouter(connect(null, mapDispatchToProps)(App));
