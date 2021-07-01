import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import WorkoutContainer from './components/WorkoutContainer.js';
import HomePage from './components/HomePage';

export default class App extends Component {
  state = {
    users: [],
    loggedinUser: [],
    workouts: []
  }

  handleLogInUser = (loginUserObj) => {
    this.setState({
      loggedinUser: loginUserObj
    });
  };

  handleAddNewUser = (newUser) => {
    this.setState({
      users: [...this.state.users, newUser]
    })
  }

  componentDidMount() {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((users) => {
        fetch("http://localhost:4000/workouts")
          .then((res) => res.json())
          .then((workouts) =>
            this.setState({
              users: users,
              workouts: workouts
            })
          );
      });
  }

  render() {
    return (
    <Router>
      <div className="App">
        <Switch>
        <Route
            exact
            path="/barakoton"
            component={(props) => (
              <Login
              {...props}
              users={this.state.users}
              handleLogInUser={this.handleLogInUser}
              handleAddNewUser={this.handleAddNewUser}
                />
            )}
          />
          <Route
          exact
          path="/homepage"
          component={(props) => (
            <HomePage 
            {...props}
            />
          )} 
          />
          <Route
            exact
            path="/workouts"
            component={(props) => (
              <WorkoutContainer
                {...props}
                userLogIn={this.state.userLogIn}
                workouts={this.state.workouts} 
              />
            )}
          />
        </Switch>
      </div>
    </Router>
    );
  }
}
