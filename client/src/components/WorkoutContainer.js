import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image, Button } from "semantic-ui-react";

export default class WorkoutContainer extends React.Component {
  state = {
    // workouts: [],
    sortDifficulty: false,
  };

  // componentDidMount() {
  //   fetch("http://localhost:4000/workouts")
  //     .then((res) => res.json())
  //     .then((workouts) =>
  //       this.setState({
  //         workouts: workouts,
  //       })
  //     );
  // }

  sortDifficulty = () => {
    this.setState({
      sortDifficulty: !this.state.sortDifficulty,
    });
  };

  _onReady(event) {
    event.target.pauseVideo();
  }

  handleRenderVideos = () => {
    let sortedWorkouts = this.state.sortDifficulty
      ? [...this.props.workouts].sort((a, b) => b.difficulty - a.difficulty)
      : this.props.workouts;

    return sortedWorkouts.map((workout) => {
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
              <Button
                icon
                onClick={() => this.props.handleAddBookmark(workout.id)}
              >
                <Icon className="bookmark" name="plus" />
              </Button>
            </p>
          </Card.Content>
        </Card>
      );
    });
  };

  render() {
    return (
      <div className="sorting">
        <Button
          className="sort-btn"
          primary
          onClick={() => this.sortDifficulty()}
        >
          Sort by difficulty
        </Button>

        <div className="grid">{this.handleRenderVideos()}</div>
      </div>
    );
  }
}
