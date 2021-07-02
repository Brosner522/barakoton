// import React, { Component } from 'react';

// export default class WorkoutContainer extends Component {
//     state = {
//         workouts: []
//     }

//     componentDidMount() {
//     fetch("http://localhost:4000/workouts")
//     .then((res) => res.json())
//     .then((workouts) =>
//       this.setState({
//         workouts: workouts
//       })
//     )};


//     render() {
//         return(
//             <div>
//                 {this.state.workouts}
//             </div>
//         ) 
//     }
// }

import React from 'react';
import YouTube from 'react-youtube';
import { Grid, Image } from 'semantic-ui-react'

export default class Example extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return <YouTube videoId="UBMk30rjy0o" opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

