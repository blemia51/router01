import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import History from './History';

class App extends Component {
  render() {
      return (
          <BrowserRouter>
            <div>
            <span style={{padding:'5px'}}><NavLink exact to="/"> Accueil </NavLink></span>
              <span style={{padding:'5px'}}><NavLink to="/notre-histoire" activeStyle={{
    color: "red",
  }}> Histoire </NavLink></span>

              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/notre-histoire" component={History} />
              </Switch>
            </div>
          </BrowserRouter>
      );
  }
}

export default App;
