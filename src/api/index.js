import Posts from './posts'

export default {
  Posts
}

class ApiClass {
  constructor() {
    this.rating = process.env.RATING ? `rating:${process.env.RATING}` : 'rating:s'


    // this.Posts = Posts
    this.Posts = Posts.get.bind(this, this.rating)
  }

  _queryBuilder() {

  }
}

export { ApiClass }
