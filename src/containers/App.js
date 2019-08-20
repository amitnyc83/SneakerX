import React, { Component } from 'react';
// import { connect } from 'react-redux';
import HomePage from '../components/HomePage';
import UserForm from '../components/UserForm';
import NavBar from '../components/Navbar';
import Cart from '../components/Cart';
import SellerPage from '../components/SellerPage';
import './App.css';
import { Switch, withRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <React.Fragment>
            <Route path="/" exact render={() => (<HomePage />)} />
            <Route path="/login" exact render={(renderProps) => (<UserForm renderProps={renderProps} />)} />
            <Route path="/cart" exact render={() => (<Cart />)} />
            <Route path="/seller" exact render={() => (<SellerPage />)} />
          </React.Fragment>
        </Switch>
      </div>
    )
  }
}



export default withRouter(App);
