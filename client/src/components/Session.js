import React from 'react';
import YouTube from 'react-youtube';
import {  Card, Icon, Image } from 'semantic-ui-react'

export default class Session extends React.Component {
  state = {
    workout: {}
  }

  componentDidMount() {
    // Take that workout ID in our url and go and fetch that workout
    // Grab the workout id off the url
    const workoutId = this.props.match.params.videoId
    // Take this video id and fetch that particular video from the backend 

    // Fetch here


  };

  // let workoutVideo = this.state.workouts.map((workout) => {
    // })
    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }



    
  render() {
    const opts = {
      height: '350px',
      width: "100%" ,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        controls: 0,
      },
    }

    return (
      <div>
          <YouTube videoId={this.state.workout.video} opts={opts} onReady={this._onReady} />   
          

      </div>
    )
  }
}

