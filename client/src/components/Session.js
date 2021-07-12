import React, { Component } from "react";
import YouTube from "react-youtube";
// import { Link } from "react-router-dom";
import { Button, TextArea, Form } from "semantic-ui-react";

export default class Session extends Component {
  state = {
    workout: {},
    notes: ""
  };

  componentDidMount() {
    // Take that workout ID in our url and go and fetch that workout
    // Grab the workout id off the url
    const workoutId = this.props.match.params.videoId;
    // Take this video id and fetch that particular video from the backend
    // Fetch here
    fetch(`http://localhost:4000/workouts/${workoutId}`)
      .then((res) => res.json())
      .then((workout) =>
        this.setState({
          workout: workout,
          // session: workout.id
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
        alert("New session created")
        this.props.history.push("/sessionhistory")
        this.setState({
          notes: ''
        });
        this.props.handleSessions(newSession)
      });
  };

  handleChange = (e) => {
    this.setState({
      notes: e.target.value,
    });
  };

  // let workoutVideo = this.state.workouts.map((workout) => {
  // })
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: "800px",
      width: "1000px",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        controls: 0,
        playsinline: 0,
        modestbranding: 1,
        // onPlay: this.setState({
        //   session: this.state.workout
        // })
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
          {/* onClick to forward the user to session page and display all sessions  */}
          <Button primary type="submit" name="button" className="button">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
