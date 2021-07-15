import React, { Component } from "react";
import { Input, Button, Header } from "semantic-ui-react";

export default class Signup extends Component {
  state = {
    name: "",
    email: "",
    age: "",
    weight: "",
    password: "",
  };

  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
    .then((res) => res.json())
    .then(newUser => {
      this.props.handleSignup(newUser)
    })
  };


  render() {
    const {name, email, age, weight, password } = this.state 
    return (
      <div id="signup-login">
        <form className="signup" onSubmit={this.handleSubmit}>
          <label>
          <Header textAlign="center" as='h3'>Sign Up</Header>
          {" "}
            <p className="login-input">
              <Input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={this.handleChange}
              />{" "}
            </p>{" "}
            <p className="login-input">
              <Input
                type="text"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) =>
                  this.setState({
                    email: e.target.value,
                  })
                }
              />{" "}
            </p>{" "}
            <p className="login-input">
              <Input
                type="number"
                placeholder="Enter your age"
                name="age"
                value={age}
                onChange={this.handleChange}
              />{" "}
            </p>{" "}
            <p className="login-input">
              <Input
                type="number"
                placeholder="Enter your weight"
                name="weight"
                value={weight}
                onChange={this.handleChange}
              />{" "}
            </p>{" "}
            <p className="login-input">
              <Input
                // type="password"
                type="text"
                placeholder="Choose a password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />{" "}
            </p>{" "}
          </label>{" "}
          <p className="login-input">
            <Button
              primary
              className="signup-btn"
              type="submit"
              value="Signup"
            >
              Submit
            </Button>
          </p>{" "}
          {/* <input type="submit" value="signup"/> */}
        </form>{" "}
      </div>
    );
  }
}
