import React, { Component } from 'react';
import HomePage from './Components/HomePage';
import UserForm from './Components/UserForm';
import Header from './Components/Header';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
       <Switch>
         <Route path="/login" exact render={() => (<UserForm />)} />
         <Route path="/" exact render={() => (<HomePage />)} />
       </Switch>
     </Router>
    )
  }
}



export default App;
