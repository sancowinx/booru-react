import React, { Component } from 'react'
import './stylesheets/App.css'

import SearchQueryForm from './components/query'
import DanbooruPost from './components/posts'

// TODO: use lodash
// TODO: use JedWatson/react-select, for a tag search
// TODO: use Immutable.js
// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#formatting-code-automatically
// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-flow
// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc
// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables
// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#developing-components-in-isolation


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
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
    )
  }
}

export default App
