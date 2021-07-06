import React from "react";
import YouTube from "react-youtube";
// import { Link } from "react-router-dom";
import { Button, Input } from "semantic-ui-react";

export default class Session extends React.Component {
  state = {
    display: false,
    workout: {},
    session: {},
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

  handleSession = () => {
    console.log("clicked");
    let newSession = {
      user_id: this.props.user.id,
      workout_id: this.state.workout.id,
      notes: ""
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
        this.setState({
          session: newSession,
        });
      });
  };
  

  handleClick = () => {
    this.setState({
      display: !this.state.display,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.notes]: e.target.value,
    });
  };
  // handleNotes = () => {
  //   this.setState({
  //     notes:
  //   })
  // }

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
        <Button primary onClick={() => this.handleSession()}>
          Add to session history
        </Button>
        <Button primary onClick={this.handleClick}>
          Add notes
        </Button>
        {this.state.display ? (
          <form>
            <Input
              onChange={this.handleChange}
              value={this.state.session.notes}
              type="text"
              name="notes"
              className="input-text"
            />
            <Button
              primary
              onClick={this.handleClick}
              type="submit"
              name="submit"
              value="Submit"
              className="button"
            >
              Submit
            </Button>
          </form>
        ) : null}
        <YouTube
          videoId={this.state.workout.video}
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }
}
