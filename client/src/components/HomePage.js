import React, { Component } from "react";
import User from "./User";
import { Header } from "semantic-ui-react";

export default class HomePage extends Component {
  render() {
    return (
      <div id="homepage">
        <Header textAlign="center" as="h1">
          Profile Page
        </Header>
        <User
          {...this.props}
          currentUser={this.props.currentUser}
          editUser={this.props.editUser}
          deleteUser={this.props.deleteUser}
        />
      </div>
    );
  }
}
