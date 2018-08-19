import React, { Component } from 'react'
import Danbooru from '../api'
import Thumbnail from './thumbnail'

export default class DanbooruPosts extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  renderImages = () => {
    const { images } = this.props

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

    const { isLoading, currentPage } = this.props

    if (isLoading) {
      return <div className={'danbooru--pagination_control'}>Loading...</div>
    } else {
      const shouldDisabled = currentPage === 1 ? true : false
      return (
        <div className={'danbooru--pagination_control'}>
          {!currentPage === 1 && <button type={'button'} onClick={this.props.getFirstPage}>First</button>}
          <button type={'button'} onClick={this.props.getPrevPaginated} disabled={shouldDisabled}>Prev</button>
          <span><strong>{currentPage}</strong></span>
          <button type={'button'} onClick={this.props.getPaginated}>Next</button>
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
