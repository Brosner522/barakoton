import React from 'react'
import { Icon, Menu, Sidebar } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

class Navbar extends React.Component {




    render() {
        return (
  
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
    >
      <Menu.Item as={Link} to="/homepage">
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/workouts">
      <Icon name='bookmark' />
        Workouts
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='bookmark' />
        Bookmarked
      </Menu.Item>
      <Menu.Item as="button" onClick={this.props.handleLogout}>
        <Icon name='bookmark' />
        Log out
      </Menu.Item>
    </Sidebar>

 

        )
    }
}

export default Navbar