import React, { Component } from 'react'
import './stylesheets/App.css'
import Danbooru from './api'
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

    this.state = {
      images: [],
      currentPage: 1,
      isLoading: false
    }
    // there is no caching yet

    // non essential feature
    // theme using react context
  }

  componentWillMount() {
    this.setState({ isLoading: true })
  }

  componentDidMount() {
    Danbooru.Posts.get()
    .then((res) => {

      // const response = JSON.parse(res) // if using options object, it will auto parse

      this.setState((prevState, props) => {
        return {
          currentPage: 1,
          isLoading: false,
          images: res.map((image) => image)
        }
      })
    })
  }

  getPaginated = () => {
    this.setState({ isLoading: true })

    Danbooru.Posts.getPaginated(this.state.currentPage + 1)
    .then((res) => {
      this.setState((prevState, props) => {
        return {
          isLoading: false,
          images: res.map((image) => image),
          currentPage: prevState.currentPage + 1
        }
      })
    })
  }

  getFirstPage = () => {
    this.setState({ isLoading: true })

    Danbooru.Posts.getPaginated(1)
    .then((res) => {
      this.setState((prevState, props) => {
        return {
          isLoading: false,
          images: res.map((image) => image),
          currentPage: 1
        }
      })
    })
  }

  getPrevPaginated = () => {
    this.setState({ isLoading: true })

    Danbooru.Posts.getPaginated(this.state.currentPage - 1)
    .then((res) => {
      this.setState((prevState, props) => {
        return {
          isLoading: false,
          images: res.map((image) => image),
          currentPage: prevState.currentPage - 1
        }
      })
    })
  }

  getByTag = (tags) => {
    this.setState({ isLoading: true })

    Danbooru.Posts.getByTag(tags)
    .then((res) => {
      console.log('back', res)
      this.setState((prevState, props) => {
        return {
          isLoading: false,
          images: res.map((image) => image),
          currentPage: 1
        }
      })
    })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <a className="App-title" href="/">Danbooru React</a>
          <br />
          <SearchQueryForm getByTag={this.getByTag} />
        </header>
        <DanbooruPost
          getPaginated={this.getPaginated}
          getFirstPage={this.getFirstPage}
          getPrevPaginated={this.getPrevPaginated}
          {...this.state}
        />

        {/* Pagination controlled by current searches */}
      </div>
    )
  }
}

export default App
