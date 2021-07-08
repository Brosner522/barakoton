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
import React from "react";
// import YouTube from "react-youtube";
import { Link } from "react-router-dom";
import { Card, Icon, Image, Button } from "semantic-ui-react";

export default class WorkoutContainer extends React.Component {
  state = {
    workouts: [],
    sortDifficulty: false,
  };

  componentDidMount() {
    fetch("http://localhost:4000/workouts")
      .then((res) => res.json())
      .then((workouts) =>
        this.setState({
          workouts: workouts,
        })
      );
  }

  sortDifficulty = () => {
    this.setState({
      sortDifficulty: !this.state.sortDifficulty,
    });
  };


  // handleSortWorkouts = () => {
  //   // debugger
  //   let sortedWorkouts = [];
  //   // const workoutsToSort = [...this.state.workouts];
  //   if (this.state.sortDifficulty === true) {
  //     sortedWorkouts = this.state.workouts.sort(
  //       (a, b) => b.difficulty - a.difficulty
  //     );
  //   }
  //   this.setState({
  //     workouts: sortedWorkouts
  //   })
  // };

  // let workoutVideo = this.state.workouts.map((workout) => {
  // })
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  handleRenderVideos = () => {
    let sortedWorkouts = this.state.sortDifficulty
      ? [...this.state.workouts].sort((a, b) => b.difficulty - a.difficulty)
      : this.state.workouts;

    // let workoutsSorted = this.state.sortCoach
    // console.log(sortedWorkouts)
    // this.setState({
    //   workouts: beef,
    // });
    return sortedWorkouts.map((workout) => {
      // All the HTML for one workout

      // const opts = {
      //   height: "350px",
      //   width: "100%",
      //   playerVars: {
      //     // https://developers.google.com/youtube/player_parameters
      //     autoplay: 0,
      //     controls: 0,
      //   },
      // };

      return (
        <Card
          key={workout.id}
          as={Link}
          to={`/session/${workout.id}`}
          link={true}
        >
          <Image
            src={`https://img.youtube.com/vi/${workout.video}/0.jpg`}
            wrapped
            ui={false}
          />
          {/* <YouTube videoId={workout.video} opts={opts} onReady={this._onReady} /> */}
          <Card.Content>
            <Card.Header>{workout.coach}</Card.Header>
            <Card.Meta>
              <span>{workout.workout_type}</span>
            </Card.Meta>
            <Card.Description>{workout.time}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <p>
              Diffulty:
              <Icon name="chart line" />
              {workout.difficulty}
              <br></br>
              Bookmark workout
              <Button icon onClick={() => this.props.handleAddBookmark(workout.id)}>
                <Icon className="bookmark" name="plus" />
              </Button>
            </p>
          </Card.Content>
        </Card>
      );
    });
  };

  render() {
    // const beef = this.state.sortDifficulty ? this.state.workouts : this.state.workouts.sort((a, b) => b.difficulty - a.difficulty);
    return (
      <div className="sorting">
        <Button
          className="sort-btn"
          primary
          onClick={() => this.sortDifficulty()}
        >
          Sort by difficulty
        </Button>

        <div className="grid">
          {this.handleRenderVideos()}
          {/* <Grid container columns={3}>
          <Grid.Column>
            <Image src="https://www.youtube.com/embed/tiC0zylTB0w" />
          </Grid.Column>
          <Grid.Column>
            <Image src='/images/wireframe/image.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='/images/wireframe/image.png' />
          </Grid.Column>
        </Grid> */}
        </div>
      </div>
    );
  }
}
