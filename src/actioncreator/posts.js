import Danbooru from '../api'

export default new Danbooru()

// or have a set of endpoint then autogen?

class ActionCreator {
  constructor() {
    this.rating = process.env.RATING ? `rating:${rating}` : 'rating:s'
  }
}

export const DanbooruActionCreator = new ActionCreator()
