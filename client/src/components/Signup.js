import React, { Component } from "react";
import { Input, Button } from "semantic-ui-react";

export default class Signup extends Component {
  state = {
    name: "",
    email: "",
    age: "",
    weight: "",
    password: "",
  };

  handleSignup = (e) => {
    e.preventDefualt();
    let newUser = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
      weight: this.state.weight,
      password: this.state.password,
    };
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          const user = data.user;
          alert("Please log in");
          this.props.handleAddNewUser({
            id: user.id,
            name: user.name,
            email: user.email,
            age: user.age,
            weight: user.weight,
            password: user.password,
          });
        });
      } else if (res.status === 400) {
        alert("Please try again");
      }
    });
  };

  render() {
    return (
      <div id="signup-login" >
        <form className="signup" onSubmit={(e) => this.handleSignup(e)}>
          <label>
            Sign up{" "}
            <p className="login-input">
              <Input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={this.state.name}
                onChange={(e) =>
                  this.setState({
                    name: e.target.value.toLowerCase(),
                  })
                }
              />{" "}
            </p>{" "}
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
                type="number"
                placeholder="Enter your age"
                age="age"
                value={this.state.age}
                onChange={(e) =>
                  this.setState({
                    age: e.target.value,
                  })
                }
              />{" "}
            </p>{" "}
            <p className="login-input">
              <Input
                type="number"
                placeholder="Enter your weight"
                weight="weight"
                value={this.state.weight}
                onChange={(e) =>
                  this.setState({
                    weight: e.target.value,
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
            <Button
              primary
              className="signup-btn"
              type="submit"
              value="Sign Up"
            >
              Submit
            </Button>
          </p>{" "}
        </form>{" "}
      </div>
    );
  }
}
