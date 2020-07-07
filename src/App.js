import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AllBeers from './AllBeers';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';
import EachBeer from './EachBeer';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
<<<<<<< HEAD
          <Route exact path = '/' render = { () => <Home />}/>
          <Route exact path = '/All-beers' render = { () => <AllBeers />}/>
          <Route exact path = '/Random-beer' render = { () => <RandomBeer />}/>
          <Route exact path = '/New-beer' render = { () => <NewBeer />} />
          <Route exact path = '/beers/:id'  render = { (props) => <EachBeer {...props} />}/>
=======
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/all-beers" render={() => <AllBeers />} />
          <Route exact path="/random-beers" render={() => <RandomBeer />} />
          <Route exact path="/new-beer" render ={() => <Newbeer/>} />
          <Route
            exact path="/beers/:id"
            render={(props) => <EachBeer {...props} />}
          />
>>>>>>> 512f047048c6661224a4d945a42fddb28568ff3b
        </Switch>
      </div>
    );
  }
}

export default App;
