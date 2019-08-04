import React, { Component } from 'react';
import HomePage from './Components/HomePage';
import UserForm from './Components/UserForm';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
       <Switch>
         <Route path="/signup" exact render={() => (<UserForm />)} />
         <Route path="/home" exact render={() => (<HomePage />)} />
       </Switch>
      </div>
    )
  }
}



export default App;
