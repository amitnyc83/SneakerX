import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Header, Container, Button, Divider } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'


class SignUpForm extends Component {
  state = {
    user: {
      username: '',
      password: ''
    }
  }

  signUpHandleChange = (event) => {
    this.setState({
     user: {
       ...this.state.user,
       [event.target.name]: event.target.value
     }
    })
  }

  signUpHandleSubmit = (event) => {
    event.preventDefault()
    fetch(`http://localhost:3001/users`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        user: this.state.user
      })
    }).then(resp => resp.json())
    .then(user => {
      localStorage.setItem('token', user.jwt)
      this.props.currentUser(user)
      this.props.history.push('/cart')
    })
  }

  render(){
    return(
      <React.Fragment>
       <div>
         <Container>
         <br></br>
         <Header as="h3" textAlign='center'>
           Create a New Account below by Signing Up
           <Divider hidden/>
          </Header>
          <Form onSubmit={this.signUpHandleSubmit}>
           <Form.Field align='center'>
             <label>Username</label>
             <Form.Input
               width={4}
               name='username'
               type='text'
               placeholder='Username'
               onChange={this.signUpChangeHandle}
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
               onChange={this.signUpChangeHandle}
               value={this.state.value}
              />
            </Form.Field>
            <Button type='submit' color='blue'>Submit</Button>
          </Form>
        </Container>
      </div>
     </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    currentUser: (theuser) => {dispatch({
      type: "CURRENT_USER", payload: theuser
    })}
  }
}

export default withRouter(connect(null, mapDispatchToProps)(SignUpForm))
