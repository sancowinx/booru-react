import Posts from './posts'

export default {
  Posts,
}


// danbooru allows only 'preview_file_url' on external domain, otherwise: CORS
// need to change to class
// make query builder
class DanbooruApi {
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
}

export { DanbooruApi }
