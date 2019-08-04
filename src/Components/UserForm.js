import React, { Component } from 'react';


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
       Sign Up
       <form onSubmit={this.signUpHandleSubmit}>
         Username
         <input
           name='username'
           type='text'
           onChange={this.signUpChangeHandle}
           value={this.state.value}
          />
          Password
          <input
           name='password'
           type='text'
           onChange={this.signUpChangeHandle}
           value={this.state.value}
          />
          <button>Submit</button>
        </form>
        <label>Sign In</label>
        <form onSubmit={(e) => this.signInHandleSubmit}>
         Username
         <input
           name='username'
           type='text'
           onChange={this.signInHandleChange}
           value={this.state.value}
          />
          Password
          <input
           name='password'
           type='text'
           onChange={this.signInHandleChange}
           value={this.state.value}
          />
          <button>Sign In</button>
        </form>
      </div>
    )
  }
}


export default UserForm;
