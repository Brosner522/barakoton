import React, { Component } from 'react';
import User from './User';

export default class HomePage extends Component {



    

    render() {
        console.log(this.props)
        return(
            <div id="homepage">
                <User
                currentUser={this.props.currentUser}
                /> 
            </div>
        )
    }
}

