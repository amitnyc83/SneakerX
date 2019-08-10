import React, { Component } from 'react';
import { Form, Header, Container, Button, Divider } from 'semantic-ui-react'



class UserForm extends Component {
  state = {
    user: {
      usernae: '',
      password: ''
    }
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
      </div>
    )
  }
}



export default UserForm;
