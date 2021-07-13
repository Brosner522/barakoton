import React, { Component } from 'react';
import User from './User';

export default class HomePage extends Component {



    

    render() {
        return(
            <div id="homepage"  >
                <User
                {...this.props} 
                currentUser={this.props.currentUser}
                editUser={this.props.editUser}
                deleteUser={this.props.deleteUser}
                /> 
            </div>
        )
    }
}

