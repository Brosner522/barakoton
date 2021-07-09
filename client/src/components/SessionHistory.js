import React, { Component } from "react";
import { Card, Icon, Image} from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class SessionHistory extends Component {
  // state = {
  //   sessions: this.props.sessions,
  // };
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

  // Map over the sessions which are passed here as a prop (array of sessions) for each session render a card with notes and workout info as in workoutsContainer
  // For each session render a card (HOW TO ACCESS DATA THROUGH IDs???)


  



  handleRenderSessions = () => {
    return this.props.sessions.map((session) => {
      return (
        <Card
          key={session.id}
          as={Link}
          to={`/sessionhistory/${session.id}`}
          link={true}
        >
          <Image
            src={`https://img.youtube.com/vi/${session.video}/0.jpg`}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>{session.coach}</Card.Header>
            <Card.Meta>
              <span>{session.workout_type}</span>
            </Card.Meta>
            <Card.Description>{session.time}</Card.Description>
          </Card.Content>
          <Card.Content extra></Card.Content>
          <p>
            Diffulty:
            <Icon name="chart line" />
            {session.difficulty}
          </p>
        </Card>
      );
    });
  };

  render() {
    
    const sessions = this.props.workouts.filter((workout) => 
      workout.id === this.props.sessions[0]
    )
    console.log(this.props.workouts)
    console.log(this.props.sessions[0])
    console.log(sessions)
  
    return (
      <div>
        <div className="grid">{this.handleRenderSessions()}</div>
      </div>
    );
  }
}
