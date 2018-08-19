// @flow
import request from 'request-promise'

// request-promise parse results as stringified json, if use .get(), .post()
// if using options object, it will auto parse

// https://github.com/request/request-promise#get-something-from-a-json-rest-api

const rating = process.env.RATING || 's'

export default {
  get: () => {
    // https://github.com/request/request-promise#get-something-from-a-json-rest-api
    const options = {
      uri: 'https://danbooru.donmai.us/posts.json',
      qs: {
        rating: `${rating}`,
      },
      json: true
    }

    return request(options)
      .then(res => Promise.resolve(res))
      .catch((err) => {
        throw err
      })
  },
  getPaginated: (page: number) => {
    const options = {
      uri: 'https://danbooru.donmai.us/posts.json',
      qs: {
        rating: `${rating}`,
        page,
      },
      json: true
    }

    return request(options)
      .then(res => Promise.resolve(res))
      .catch((err) => {
        throw err
      })
  },
  // test flowtype
  getByTag: (tags: string) => {
    const options = {
      uri: 'https://danbooru.donmai.us/posts.json',
      qs: {
        rating: `${rating}`,
        tags
      },
      json: true
    }

    return request(options)
      .then(res => Promise.resolve(res))
      .catch((err) => {
        throw err
      })
  }
}
