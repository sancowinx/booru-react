import React, { Component } from 'react'
import logo from './logo.svg'
import './stylesheets/App.css'

import Endpoints from './api'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: []
    }

    console.log('App constructor')
  }

  componentWillMount() {
    console.log('App mount')
    console.log('Endpoints', Endpoints)
  }

  componentDidMount() {
    console.log('App mount')
    Endpoints.Posts.posts()
    .then((res) => {
      console.log('finished request', res)
      console.log('typeof res', typeof res)

      const response = JSON.parse(res)

      this.setState((prevState, props) => {
        return {
          images: response.map((image) => {
            return {
              id: image.id,
              tag_string_general: image.tag_string_general,
              file_url: image.file_url,
              large_file_url: image.large_file_url,
              preview_file_url: image.preview_file_url
            }
          })
        }
      })
    })
  }

  renderImages = () => {
    const { images } = this.state

    if (!images.length) {
      return <div>{'no images'}</div>
    } else {
      return images.map((image) => {
        return (
          <div key={image.id}>
            <img src={image.file_url} alt={image.id} title={image.tag_string_general}/>
            <span>{image.id}</span>
          </div>
        )
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.renderImages()}
      </div>
    )
  }
}

export default App
