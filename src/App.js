import React, { Component } from 'react';
import HomePage from './Components/HomePage';
import UserForm from './Components/UserForm';
import Navibar from './Components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, withRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
        <Navibar />
       <Switch>
         <Route path="/login" exact render={() => (<UserForm />)} />
         <Route path="/" exact render={() => (<HomePage />)} />
       </Switch>
     </div>
     </React.Fragment>
    )
  }
}



export default withRouter(App);
