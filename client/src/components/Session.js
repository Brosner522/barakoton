import React, { Component } from "react";
import YouTube from "react-youtube";

import { Button, TextArea, Form } from "semantic-ui-react";

export default class Session extends Component {
  state = {
    workout: {},
    notes: "",
  };

  componentDidMount() {
    const workoutId = this.props.match.params.videoId;

    fetch(`http://localhost:4000/workouts/${workoutId}`)
      .then((res) => res.json())
      .then((workout) =>
        this.setState({
          workout: workout,
        })
      );
  }

  handleSession = (e) => {
    e.preventDefault();
    let newSession = {
      user_id: this.props.currentUser.user.id,
      workout_id: this.state.workout.id,
      notes: this.state.notes,
    };
    fetch(`http://localhost:3000/sessions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSession),
    })
      .then((res) => res.json())
      .then((newSession) => {
        alert("New session created");
        this.props.history.push("/sessionhistory");
        this.setState({
          notes: "",
        });
        this.props.handleSessions(newSession);
      });
  };

  handleChange = (e) => {
    this.setState({
      notes: e.target.value,
    });
  };

  _onReady(event) {
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: "800px",
      width: "1000px",
      playsinline: 0,
      modestbranding: 1,
      rel: 0,
      playerVars: {
        autoplay: 0,
        controls: 0,
        playsinline: 0,
        modestbranding: 1,
      },
    };

    return (
      <div>
        <YouTube
          videoId={this.state.workout.video}
          opts={opts}
          onReady={this._onReady}
        />

        <Form onSubmit={(e) => this.handleSession(e)}>
          <TextArea
            onChange={this.handleChange}
            value={this.state.notes}
            name="notes"
            placeholder="Enter your notes (required)"
            required
            className="input-text"
          />
          <Button primary type="submit" name="button" className="button">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
