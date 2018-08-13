import React, { Component } from 'react'
import './stylesheets/App.css'

import DanbooruPost from './components/posts'

class App extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Danbooru React</h1>
        </header>
        <DanbooruPost />
      </div>
    )
  }
}

export default App
