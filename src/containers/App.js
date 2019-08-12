import React, { Component } from 'react';
import HomePage from '../components/HomePage';
import UserForm from '../components/UserForm';
import NavBar from '../components/Navbar';
import Cart from '../components/Cart';
import './App.css';
import { BrowserRouter as Router, Switch, withRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar {...this.props}/>
        <Switch>
          <React.Fragment>
            <Route path="/" exact render={() => (<HomePage />)} />
            <Route path="/login" exact render={(renderProps) => (<UserForm renderProps={renderProps} />)} />
            <Route path="/cart" exact render={() => (<Cart />)} />
          </React.Fragment>
        </Switch>
      </div>
    )
  }
}



export default withRouter(App);