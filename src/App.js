import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AllBeers from './AllBeers';
import Header from './Header';
import EachBeer from './EachBeer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/all-beers" render={() => <AllBeers />} />
          <Route exact path="/random-beers" />
          <Route exact path="/new-beer" />
          <Route
            exact
            path="/beers/:id"
            render={(props) => <EachBeer {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
