import "./App.css";
import { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Login from "./components/Login";
import WorkoutContainer from "./components/WorkoutContainer.js";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Bookmarked from "./components/Bookmarked";
import SessionHistroy from "./components/SessionHistory";
import Session from "./components/Session";

class App extends Component {
  state = {
    currentUser: {},
    sessions: [],
    bookmarks: [],
    workouts: [],
  };

  handleAddBookmark = (workoutId) => {
    const newBookmark = {
      workout_id: workoutId,
    };

    fetch(`http://localhost:3000/bookmarks/toggle`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.state.currentUser.jwt}`,
      },
      body: JSON.stringify(newBookmark),
    })
      .then((res) => res.json())
      .then((newBookmark) => {
        console.log("bookmarked");
        this.props.history.push("/bookmarked");
        this.setState({
          bookmarks: [...this.state.bookmarks, newBookmark],
        });
      });
  };

  handleRemoveBookmark = (e, id) => {
    e.preventDefault();
    fetch(
      `http://localhost:3000/bookmarks/${id}`,
      {
        method: "DELETE",
      },
      alert("Are you sure you want to remove this bookmark?")
    )
      .then((r) => r.json())
      .then(() => {}, this.props.history.push("/workouts"));
  };

  componentDidMount() {
    fetch("http://localhost:3000/workouts")
      .then((res) => res.json())
      .then((workouts) =>
        this.setState({
          workouts: workouts,
        })
      );
  }

  handleLogout = () => {
    console.log("logging out...");
    this.props.history.push("/barakoton");
    this.setState({
      currentUser: {},
    });
  };

  handleSessions = (newSession) => {
    this.setState({
      sessions: [...this.state.sessions, newSession],
    });
  };

  editUser = (editedUser) => {
    console.log("edit user");
    const reqMethod = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedUser),
    };
    fetch(
      `http://localhost:3000/users/${this.state.currentUser.user.id}`,
      reqMethod
    )
      .then((res) => res.json())
      .then((returnUser) => {
        this.setState({
          currentUser: {
            jwt: this.state.currentUser.jwt,
            user: returnUser,
          },
        });
        console.log(returnUser, this.state.currentUser, editedUser);
      });
  };

  deleteUser = () => {
    const userId = this.state.currentUser.user.id;
    this.setState({
      currentUser: {},
    });
    this.props.history.push("/barakoton");
    fetch(
      `http://localhost:3000/users/${userId}`,
      {
        method: "DELETE",
      },
      alert("Are you sure you want to delete your account?")
    );
  };

  handleSignup = (currentUser) => {
    this.setState(
      {
        currentUser: currentUser,
      },
      () => {
        this.props.history.push("/homepage");
      }
    );
  };

  loginUser = (currentUser) => {
    this.setState(
      {
        currentUser: currentUser,
      },
      () => {
        this.props.history.push("/homepage");
      }
    );
  };

  render() {
    return (
      <div className="App">
        <Navbar
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route
            exact
            path="/barakoton"
            component={(props) => (
              <Login
                {...props}
                user={this.state.currentUser}
                handleSignup={this.handleSignup}
                loginUser={this.loginUser}
              />
            )}
          />
          <Route
            exact
            path="/homepage"
            component={(props) => (
              <HomePage
                {...props}
                currentUser={this.state.currentUser}
                editUser={this.editUser}
                deleteUser={this.deleteUser}
              />
            )}
          />
          <Route
            exact
            path="/workouts"
            component={(props) => (
              <WorkoutContainer
                {...props}
                user={this.state.currentUser}
                bookmarks={this.state.bookmarks}
                workouts={this.state.workouts}
                handleAddBookmark={this.handleAddBookmark}
              />
            )}
          />
          <Route
            exact
            path="/bookmarked"
            component={(props) => (
              <Bookmarked
                {...props}
                bookmarks={this.state.bookmarks}
                user={this.state.currentUser}
                workouts={this.state.workouts}
                handleRemoveBookmark={this.handleRemoveBookmark}
              />
            )}
          />
          <Route
            exact
            path="/sessionhistory"
            component={(props) => (
              <SessionHistroy
                user={this.state.currentUser}
                sessions={this.state.sessions}
                workouts={this.state.workouts}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/session/:videoId"
            component={(props) => (
              <Session
                {...props}
                currentUser={this.state.currentUser}
                handleSessions={this.handleSessions}
                handleAddBookmark={this.handleAddBookmark}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
