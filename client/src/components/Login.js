import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';
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
        body: JSON.stringify(this.state.email, this.state.password),
      })
      .then((res) => res.json())
      .then ((res) => {
        if (res.error) {
          alert(res.error);
          window.location.href = "http://localhost:4000/barakoton";
        } else {
          // debugger
          this.props.user(res);
          alert("Welcome back")
          this.setState({
            email: "",
            password: ""
          });
          this.props.history.push("/homepage")
        }
      })
    }


    render() {
    return (
      <div id="signup-login" className="forms">
        <form className="login" onSubmit={(e) => this.handleLogin(e)} >
          <label>
            Log In{" "}
            <p className="login-input">
            <Input
                type="text"
                placeholder="Enter your email"
                email="email"
                value={this.state.email}
                onChange={(e) =>
                  this.setState({
                    email: e.target.value,
                  })
                }
              />{" "}
            </p>{" "}
            <p className="login-input">
              <Input
                // type="password"
                type="text"
                placeholder="Choose a password"
                password="password"
                value={this.state.password}
                onChange={(e) =>
                  this.setState({
                    password: e.target.value,
                  })
                }
              />{" "}
            </p>{" "}
          </label>{" "}
          <p className="login-input">
            <Button primary className="login-btn" type="submit" value="Log In" >Log in</Button>
          </p>{" "}
        </form>{" "}

          <Signup />
      </div>
    );
  }
}
