import React, { Component } from 'react'
import Danbooru from '../api'
import Thumbnail from './thumbnail'

export default class DanbooruPosts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [],
      currentPage: 1
    }
  }

  componentDidMount() {
    Danbooru.Posts.get()
    .then((res) => {

      // const response = JSON.parse(res) // if using options object, it will auto parse

      this.setState((prevState, props) => {
        return {
          // danbooru allows only 'preview_file_url' on external domain, otherwise: CORS
          images: res.map((image) => image),
        }
      })
    })
  }

  getPaginated = () => {
    Danbooru.Posts.getPaginated(this.state.currentPage + 1)
    .then((res) => {
      this.setState((prevState, props) => {
        return {
          images: res.map((image) => image),
          currentPage: prevState.currentPage + 1
        }
      })
    })
  }

  getPrevPaginated = () => {
    Danbooru.Posts.getPaginated(this.state.currentPage - 1)
    .then((res) => {
      this.setState((prevState, props) => {
        return {
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

  render() {
    return (
      <div className={'danbooru--posts'}>
        <div className={'posts_grid'}>
          {this.renderImages()}
        </div>
        <div className={'danbooru--pagination_control'}>
          {this.state.currentPage > 1 && <button type={'button'} onClick={this.getPrevPaginated}>Prev</button>}
          <button type={'button'} onClick={this.getPaginated}>Next</button>
        </div>
      </div>
    )
  }

}
