import './App.css';
import { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Login from './components/Login';
import WorkoutContainer from './components/WorkoutContainer.js';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Bookmarked from './components/Bookmarked';
import SessionHistroy from './components/SessionHistory';
import Session from './components/Session'


class App extends Component {
  state = {
    // user: {
    //   id: 1
    // }
    user: [],
    sessions: [],
    bookmarks: []
  }

  handleAddBookmark = (workoutId) => {
    const newBookmark = {
      user_id: this.state.user.id,
      workout_id: workoutId
    }

    fetch(`http://localhost:3000/bookmarked`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBookmark),
    })
    .then((res) => res.json())
    .then ((newBookmark) => {
     this.setState({
       bookmarks: [...this.state.bookmarks, newBookmark]
     })
    })
  }

  handleRemoveBookmark = () => {

  }

  handleLogInUser = (loginUserObj) => {
    this.setState({
      user: loginUserObj
    });
  };

  handleLogout = () => {
    console.log('logging out...')
    this.props.history.push('/barakoton')
    this.setState({
      user: {}
    })
  }

  handleSessions = (newSession) => {
    this.setState({
      sessions: [...this.state.sessions, newSession]
    });
  }

  // componentDidMount() {
  //   fetch(`http://localhost:3000/me`)
  //     .then((res) => res.json())
  //     .then((user) => {
  //       if (user === null) {
  //         this.props.history.push('/barakoton')
  //     } else {
  //       this.props.history.push("/homepage")
  //       this.setState({
  //         user: user
  //       })
  //     }
  //   });
  // }

  componentDidMount() {
    fetch(`http://localhost:3000/users/1`)
      .then((res) => res.json())
      .then((user) => {
        this.setState({
          user: user
        })
      })
  }

  editUser = (editedUser) => {
    const reqMethod = {
      method: "PATCH",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(editedUser)
    }

    fetch(`http://localhost:3000/users/${this.state.user.id}`, reqMethod)
      .then ((res) => res.json())
      .then((returnUser) => {
        if (returnUser.errors) {
          alert(returnUser.errors.join("/n"))
        } else {
        this.setState({
          user: editedUser
        })
      }
    })
  }

  render() {
    return (
    
      <div className="App">
        <Navbar 
        handleLogout={this.handleLogout}/>
        <Switch>
        <Route
            exact
            path="/barakoton"
            component={(props) => (
              <Login
              {...props}
              user={this.state.user}
              handleLogInUser={this.handleLogInUser}
               />
                )}
          />
          <Route
          exact
          path="/homepage"
          component={(props) => (
            <HomePage 
            {...props}
            user={this.state.user}
            editUser={this.editUser}
            />
          )} 
          />
          <Route
            exact
            path="/workouts"
            component={(props) => (
              <WorkoutContainer
              {...props}
              user={this.state.user}
              bookmarks={this.state.bookmarks}
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
              />
            )}
          />
          <Route
            exact
            path="/sessionhistory"
            component={(props) => (
              <SessionHistroy
              user={this.state.user}
              sessions={this.state.sessions}
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
                user={this.state.user}
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


export default withRouter(App)