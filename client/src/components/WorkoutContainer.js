// import React, { Component } from 'react';
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

export default class WorkoutContainer extends React.Component {
  state = {
    workouts: []
  }
    
        componentDidMount() {
        fetch("http://localhost:4000/workouts")
        .then((res) => res.json())
        .then((workouts) =>
          this.setState({
            workouts: workouts
          })
        )};
        
          // let workoutVideo = this.state.workouts.map((workout) => {

          // })

  render() {
    return(
    <div>
<Grid container columns={3}>
    <Grid.Column>
      <Image src="https://www.youtube.com/embed/tiC0zylTB0w" />
    </Grid.Column>
    <Grid.Column>
      <Image src='/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='/images/wireframe/image.png' />
    </Grid.Column>
  </Grid>
  </div>

  //   const opts = {
  //     height: '390',
  //     width: '640',
  //     playerVars: {
  //       // https://developers.google.com/youtube/player_parameters
  //       autoplay: 1,
  //     },
  //   };
  //   return <YouTube videoId="L_xrDAtykMI" opts={opts} onReady={this._onReady} />

  // }

  // _onReady(event) {
  //   // access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  //   }
    )
  }
}
