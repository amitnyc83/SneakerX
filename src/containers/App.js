import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePage from '../components/HomePage';
import UserForm from '../components/UserForm';
import NavBar from '../components/Navbar';
import Cart from '../components/Cart';
import SellerPage from '../components/SellerPage';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import './App.css';
import { BrowserRouter as Router, Switch, withRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
            <Route path="/" exact render={() => (<HomePage />)} />
            <Route path="/login" exact render={(renderProps) => (<SignInForm renderProps={renderProps} />)} />
            <Route path="/signup" exact render={(renderProps) => (<SignUpForm renderProps={renderProps} />)} />
             <Route path="/cart" exact render={(renderProps) => (<Cart />)} />
            <Route path="/seller" exact render={() => (<SellerPage />)} />
        </Switch>
      </div>
    )
  }
}



export default withRouter(App);
