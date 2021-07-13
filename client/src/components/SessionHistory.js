import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class SessionHistory extends Component {
  state = {
    sessions: []
  };
  // Send PATCH request to certain user using their ID to update the "sessions" column with a new session object.

  // Send get request to see all past sessions of currently logged in user.
  // Set state to display the new sessions (user table) as cards in a grid.

  componentDidMount = () => {
    fetch("http://localhost:3000/sessions")
      .then((res) => res.json())
      .then((sessions) =>
        this.setState({
          sessions: sessions,
        })
      );
  };

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

  handleWorkouts = () => {
    let workouts = this.props.workouts.filter((workout) => {
      return workout === this.state.sessions.workout_id;
    });
    console.log(workouts);
  };

  handleRenderSessions = () => {
    let sessions = this.state.sessions.filter((session) => {
      return session.user_id === this.props.user.user.id;
    });
    return sessions.map((session) => {
      console.log(
        this.props.workouts.filter((workout) => {
          return workout.id === session.workout_id;
        })
      );
      let beef = this.props.workouts.filter((workout) => {
        return workout.id === session.workout_id;
      });
      console.log(beef);

      return (
        <Card
          key={beef[0].id}
          as={Link}
          to={`/session/${beef[0].id}`}
          link={true}
        >
          <Image
            src={`https://img.youtube.com/vi/${beef[0].video}/0.jpg`}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Your notes: {session.notes}</Card.Header>

            <Card.Description>{beef[0].coach}</Card.Description>
            <Card.Description>{beef[0].time}</Card.Description>
          </Card.Content>
          <Card.Content extra></Card.Content>
          <p>
            Diffulty:
            <Icon name="chart line" />
            {beef[0].difficulty}
          </p>
        </Card>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="grid">{this.handleRenderSessions()}</div>
      </div>
    );
  }
}
