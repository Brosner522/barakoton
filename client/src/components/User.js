import React, { Component } from "react";
import { Input, Button } from "semantic-ui-react";
import { Card } from "semantic-ui-react";

export default class User extends Component {
  state = {
    name: this.props.currentUser.user.name,
    email: this.props.currentUser.user.email,
    age: this.props.currentUser.user.age,
    weight: this.props.currentUser.user.weight,
    password: "",
    display: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleEditForm = () => {
    this.setState({
      display: !this.state.display,
    });
  };

  handleEdit = (e) => {
    e.preventDefault();
    console.log(this.state);
    console.log(this.props);
    let newUser = {
      user_id: this.props.currentUser.user.id,
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
      weight: this.state.weight,
      password: this.state.password,
    };
    this.props.editUser(newUser);
  };

  render() {
    // console.log(this.props)
    return (
      <div className="user-info">
        {this.state.display ? (
          <form className="edit-user" onSubmit={this.handleEdit}>
            <Input
              onChange={this.handleChange}
              value={this.state.name}
              type="text"
              name="name"
              placeholder="name"
              className="input-text"
            />
            <br />
            <Input
              onChange={this.handleChange}
              value={this.state.email}
              type="text"
              name="email"
              placeholder="email"
              className="input-text"
            />
            <br />
            <Input
              onChange={this.handleChange}
              value={this.state.age}
              type="text"
              name="age"
              placeholder="age"
              className="input-text"
            />
            <br />
            <Input
              onChange={this.handleChange}
              value={this.state.weight}
              type="text"
              name="weight"
              placeholder="weight"
              className="input-text"
            />
            <br />
            <Input
              onChange={this.handleChange}
              required
              value={this.state.password}
              type="password"
              name="password"
              placeholder="password (required)"
              className="input-text"
            />
            <br />
            {this.state.email === this.props.currentUser.user.email ? (
              <Button
                primary
                onClick={this.handleEdit}
                type="submit"
                name="button"
                className="button"
              >
                Submit
              </Button>
            ) : null}
          </form>
        ) : (
          <Card>
            <Card.Content header={this.state.name} />
            <Card.Content description={this.state.email} />
            <Card.Content description={this.state.age} />
            <Card.Content description={this.state.weight} />
            <Card.Content extra>
              <Button primary onClick={this.handleEditForm}>
                Edit
              </Button>
            </Card.Content>
          </Card>
        )}
      </div>
    );
  }
}
