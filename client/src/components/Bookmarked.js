import React, { Component } from "react";
import { Card, Icon, Image, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Bookmarked extends Component {
  state = {
    bookmarks: [],
  };

  componentDidMount = () => {
    fetch("http://localhost:3000/bookmarks")
      .then((res) => res.json())
      .then((bookmarks) =>
        this.setState({
          bookmarks: bookmarks,
        })
      );
  };

  handleRenderBookmarks = () => {
    let bookmarks = this.state.bookmarks.filter((bookmark) => {
      return bookmark.user_id === this.props.user.user.id;
    });
    return bookmarks.map((bookmark) => {
      let beef = this.props.workouts.filter((workout) => {
        return workout.id === bookmark.workout_id;
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
            <Card.Header>{beef[0].workout_type}</Card.Header>
            <Card.Description>{beef[0].coach}</Card.Description>
            <Card.Description>{beef[0].time}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <p>
              Diffulty:
              <Icon name="chart line" />
              {beef[0].difficulty}
              <br></br>
              Remove Bookmark
              <Icon
                className="bookmark"
                name="minus"
                onClick={(e) => this.props.handleRemoveBookmark(e, bookmark.id)}
              />
            </p>
          </Card.Content>
        </Card>
      );
    });
  };

  render() {
    return (
      <div>
        <Header textAlign="center" as="h1">
          Bookmarked Workouts
        </Header>
        <div className="grid">{this.handleRenderBookmarks()}</div>
      </div>
    );
  }
}
