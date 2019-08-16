import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Form, Header, Container, Button, Divider } from 'semantic-ui-react'



class UserForm extends Component {
  state = {
    user: {
      username: '',
      password: ''
    }
  }

  signUphandleChange = (event) => {
   this.setState({
     user: {
       ...this.state.user,
       [event.target.name]: event.target.value
      }
    })
  }

  signUphandleSubmit = (event) => {
    event.preventDefault()
    console.log('submitted')
    // const newUser = this.state.user
    // this.props.createNewUser(newUser)
    fetch(`http://localhost:3001/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        user: this.state.user
      })
    }).then(resp => resp.json())
    .then(user => {
      console.log(user)
      localStorage.setItem('token', user.jwt)
      this.setState({
        user: user
      })
      this.props.history.push('/cart')
    })
  }


  componentDidMount = () => {
    //search to see if the user already exists
    //controller auth in rails
    let token = localStorage.getItem('token')
    console.log(token)
    if (token) {
      fetch(`http://localhost:3001/current_user`, {
        // method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accepts: "application/json",
          Authorization: token
        }
      }).then(response => response.json())
      .then(resp => {
        console.log(resp);
        this.setState({
          user:resp
        })
        this.props.history.push('/cart')
        // this.props.renderProps.history.push('/cart')
      })
    }
    else {
      console.log('inside the else ');;
        this.props.history.push('/login')
      // push them to the route you want
    }
  }


  signInhandleChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    })
  }

  signInhandleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3001/login`, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        Accepts: "applicaton/json"
      },
      body: JSON.stringify({
        user: this.state.user
      })
    })
    .then(response => response.json())
    .then(resp => { localStorage.setItem("token", resp.jwt)
     this.setState({
       user: resp.user
      })
    })
  }




  render() {
    return(
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
              onChange={this.signUpChangeHandle}
              value={this.state.value}
              />
          </Form.Field>
          <Button type='submit' color='blue'>Submit</Button>
        </Form>
      </Container>
      <Divider horizontal>OR</Divider>
      <Container>
        <Header as="h3" textAlign='center'>
          Sign In Below For An Existing Account
          <Divider hidden/>
        </Header>
        <Form onSubmit={this.signInHandleSubmit}>
          <Form.Field align='center'>
            <label>Username</label>
            <Form.Input
              width={4}
              name='username'
              type='text'
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
              onChange={this.signInChangeHandle}
              value={this.state.value}
              />
          </Form.Field>
          <Button type='submit' color='blue'>Submit</Button>
        </Form>
      </Container>
      </div>
    )
  }
}
//
// const mapStateToProps = (state) => {
//   return {
//     user: this.state.user
//   }
// }
//
//
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//    createNewUser: (newuser) => {dispatch({type: "NEW_USER", payload: newuser})},
//    signInhandleChange: (userobj) => dispatch({type: "LOG_IN", payload: userobj})
//   }
// }



export default withRouter(UserForm);
