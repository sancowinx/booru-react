import request from 'request-promise'
import _ from 'lodash'
import Posts from './posts'


// danbooru allows only 'preview_file_url' on external domain, otherwise: CORS
// need to change to class
// make query builder

// Might need to use Strategy pattern
// to allow switching between different image board
// http://robdodson.me/javascript-design-patterns-strategy/
class Api {
  rating: string = ''

  constructor(config: Object) {
    this.rating = process.env.RATING ? `rating:${process.env.RATING}` : 'rating:s'
    this.Posts = Posts.get.bind(this, this.rating)

    this.options = {
      uri: 'https://danbooru.donmai.us/posts.json',
      qs: {
        tags: `rating:${this.rating}`
      },
      json: true
    }
  }

  _queryBuilder = ({tags, rating, page}) => {
    // tag
    // rating
    // page
    const query = _.chain({})
    .set('tags', tags)
    .set('rating', rating)
    .set('page', page)
    .omitBy(_.isNil)
    .omitBy(_.isNaN)
    .omitBy(_.isNull)
    .value()

    return query
  }

  getPost = (options) => {
    return request(this._queryBuilder(options))
    .then(res => Promise.resolve(res))
    .catch((err) => {
      throw err
    })
  }

  getAutocomplete = (options) => {
    return request(this._queryBuilder(options))
    .then(res => Promise.resolve(res))
    .catch((err) => {
      throw err
    })
  }
}

export default {
  Posts
}

export { Api }
