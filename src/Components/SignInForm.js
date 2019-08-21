import React, { Component } from 'react';
import { currentUser } from '../actions/user_actions';
import { connect } from 'react-redux';
import { Form, Header, Container, Button, Divider } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'


class SignInForm extends Component {
  state = {
    user: {
      username: '',
      password: ''
    }
  }


  signInHandleChange = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    })
  }


  signInHandleSubmit = (event) => {
   event.preventDefault()
   fetch(`http://localhost:3001/login`, {
     method: "POST",
     headers: {
       "Content-Type": 'application/json',
       Accepts: "applicaton/json"
     },
     body: JSON.stringify({
       user: this.state.user
     })
   }).then(response => response.json())
   .then(resp => {
      if (resp.jwt) {
        this.props.currentUser(resp)
        localStorage.setItem('token', resp.jwt)
        this.props.history.push("/cart")
      }
    })
  }


  render() {
    return(
      <React.Fragment>
      <Container>
        <Header as="h3" textAlign='center'>
          Sign In Below For An Existing Account
          <Divider hidden/>
        </Header>
        <Form onSubmit={(event) => this.signInHandleSubmit(event)}>
          <Form.Field align='center'>
            <label>Username</label>
            <Form.Input
              width={4}
              name='username'
              type='text'
              placeholder='Username'
              onChange={this.signInChangeHandle}
              value={this.state.value}
              />
          </Form.Field>
          <Form.Field align='center'>
            <label>Password</label>
            <Form.Input
              width={4}
              name='password'
              type='text'
              placeholder='Password'
              onChange={this.signInChangeHandle}
              value={this.state.value}
              />
          </Form.Field>
          <Button type='submit' color='blue'>Submit</Button>
        </Form>
      </Container>
      </React.Fragment>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    currentUser: (theuser) => {dispatch({type: "CURRENT_USER", payload: theuser})}
  }
}

export default withRouter (connect(null, mapDispatchToProps)(SignInForm));
