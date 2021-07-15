import React, { Component } from 'react';
import { Input, Button, Header } from 'semantic-ui-react';
import Signup from './Signup'

export default class Login extends Component {
    state = {
      email: "",
      password: ""
    };


    handleLogin = (e) => {
      e.preventDefault() 
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.state.email, 
          password: this.state.password
        }),
      })
      .then((res) => res.json())
      .then ((user) => {
        if (user.error) {
          alert(user.error);
          window.location.href = "http://localhost:4000/barakoton";
        } else {
          alert("Welcome back")
          this.props.loginUser(user)
        }
      })
    }


    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    render() {
    return (
      <div id="signup-login" className="forms">
        <form className="login" onSubmit={(e) => this.handleLogin(e)} >
          <label>
          <Header textAlign="center" as='h3'>Log In</Header>
          {" "}
            <p className="login-input">
            <Input
                type="text"
                placeholder="Enter your email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />{" "}
            </p>{" "}
            <p className="login-input">
              <Input
                type="password"
                name="password"
                placeholder="Choose a password"
                password="password"
                value={this.state.password}
                onChange={this.handleChange}
              />{" "}
            </p>{" "}
          </label>{" "}
          <p className="login-input">
            <Button primary className="login-btn" type="submit" value="Log In" >Log in</Button>
          </p>{" "}
        </form>{" "}

          <Signup
            
            handleSignup={this.props.handleSignup}
            
          />
      </div>
    );
  }
}
