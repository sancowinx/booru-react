import React, { Component } from 'react'
import Danbooru from '../api'
import Thumbnail from './thumbnail'

export default class DanbooruPosts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [],
      currentPage: 1,
      isLoading: false
    }
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


  renderImages = () => {
    const { images } = this.state

    if (!images.length) {
      return null
    } else {
      return images.map((image) => {
        return (
          <Thumbnail key={image.id} {...image} />
        )
      })
    }
  }

  renderPaginationControl = () => {

    const { isLoading, currentPage } = this.state

    if (isLoading) {
      return <div className={'danbooru--pagination_control'}>Loading...</div>
    } else {
      const shouldDisabled = currentPage === 1 ? true : false
      return (
        <div className={'danbooru--pagination_control'}>
          {!currentPage === 1 && <button type={'button'} onClick={this.getFirstPage}>First</button>}
          <button type={'button'} onClick={this.getPrevPaginated} disabled={shouldDisabled}>Prev</button>
          <span><strong>{currentPage}</strong></span>
          <button type={'button'} onClick={this.getPaginated}>Next</button>
        </div>
      )
    }
  }

  render() {
    return (
      <div className={'danbooru--posts'}>
        <div className={'posts_grid'}>
          {this.renderImages()}
        </div>
        {this.renderPaginationControl()}
      </div>
    )
  }

}
