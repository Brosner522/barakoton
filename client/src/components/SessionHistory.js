import React, { Component} from 'react';

export default class SessionHistory extends Component {


    // Send PATCH request to certain user using their ID to update the "sessions" column with a new session object. 

    // Send get request to see all past sessions of currently logged in user. 
    // Set state to display the new sessions (user table) as cards in a grid.

    updateSession = () => {
        const sessionUpdate = {
          user_id: this.props.user.id,
          workout_id: this.state.workout.id,
          notes: this.state.notes,
        };
        fetch(`http://localhost:3000/sessions/${this.state.session.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sessionUpdate),
        })
          .then((res) => res.json())
          .then((sessionObj) => {
            // debugger
            this.setState({
              notes: sessionObj.notes,
              // session: sessionUpdate
            });
          });
      };
    
    
    render() {
        return(
            <div>

                Past sessions 

            </div>
        )
    }
}
