import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image, Button, Header } from "semantic-ui-react";

export default class WorkoutContainer extends React.Component {
  state = {
    sortDifficulty: false,
    iconDisplay: false,
  };

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
              <Icon
                className="bookmark"
                name="plus"
                onClick={() => this.props.handleAddBookmark(workout.id)}
              />
            </p>
          </Card.Content>
        </Card>
      );
    });
  };

  render() {
    return (
      <div className="sorting">
        <Header textAlign="center" as='h1'>Workouts</Header>
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
