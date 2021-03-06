import React from "react";
import { Icon, Menu, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    console.log(this.props.currentUser.jwt);
    return (
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible
        width="thin"
      >
        <h1 className="navbar-title">Barakoton</h1>
        <Menu.Item
          disabled={this.props.currentUser.jwt === undefined}
          as={Link}
          to="/homepage"
        >
          <Icon name="home" />
          Home
        </Menu.Item>

        <Menu.Item
          disabled={this.props.currentUser.jwt === undefined}
          as={Link}
          to="/workouts"
        >
          <Icon name="heartbeat" />
          Workouts
        </Menu.Item>

        <Menu.Item
          disabled={this.props.currentUser.jwt === undefined}
          as={Link}
          to="/bookmarked"
        >
          <Icon name="bookmark" />
          Bookmarked
        </Menu.Item>
        <Menu.Item
          disabled={this.props.currentUser.jwt === undefined}
          as={Link}
          to="/sessionhistory"
        >
          <Icon name="history" />
          Session history
        </Menu.Item>
        <Menu.Item
          disabled={this.props.currentUser.jwt === undefined}
          as={Link}
          onClick={this.props.handleLogout}
        >
          <Icon name="sign-out" />
          Log out
        </Menu.Item>
      </Sidebar>
    );
  }
}

export default Navbar;
