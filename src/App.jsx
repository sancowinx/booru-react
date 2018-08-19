import React, { Component } from 'react';
import './stylesheets/App.css';

import SearchQueryForm from './components/query';
import DanbooruPost from './components/posts';

// TODO: use lodash
// TODO: use JedWatson/react-select, for a tag search
// TODO: use Immutable.js

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    // there is no caching yet

    // non essential feature
    // theme using react context
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a className="App-title" href="/">Danbooru React</a>
          <br />
          <SearchQueryForm />
        </header>
        <DanbooruPost />
      </div>
    );
  }
}

export default App;
