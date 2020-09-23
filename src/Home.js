<<<<<<< HEAD
import './App.css';
import axios from 'axios';
import React, { Component } from 'react';

const YOUR_APP_ID = '1eddd451';
const YOUR_APP_KEY = '9acb3aa12defaeed4a85d8e39cddd73d';

class App extends Component {
  state = {
    recipes: {},
  };

  async componentDidMount() {
    let res = await axios.get(`https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free
    `);
    console.log(res);
    this.setState({
      recipes: res.data,
    });
  }

  render() {
    return <div>{this.state.recipes.name}</div>;
  }
}

export default App;
=======
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <Link to = '/' >Home</Link>
                <br />
                <Link to = 'All-beers' >All bears</Link>
                <br />
                <Link to = 'Random-beer' >Random beer</Link>
                <br />
                <Link to = 'New-beer' >New beer</Link>
            </div>
        );
    }
}

export default Home;
>>>>>>> 5f8fe67892df3f592eee0fea1d8dca6374ab72a5
