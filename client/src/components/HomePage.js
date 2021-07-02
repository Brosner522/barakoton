import React, { Component } from 'react';
import User from './User';

export default class HomePage extends Component {



    

    render() {
        return(
            <div id="homepage">
                HomePage
                <User
                user={this.props.user}
                /> 
            </div>
        )
    }
}

