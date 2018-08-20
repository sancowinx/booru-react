// @flow
import request from 'request-promise'
import _ from 'lodash'

// ???
const rating = process.env.RATING ? `rating:${rating}` : 'rating:s'

type Query = {
  tags?: string,
  limit?: number,
  page?: number,
  md5?: string,
  random?: boolean
}

const queryBuilder = (options: Query) => {
  const defaultRequestOptions = {
      uri: 'https://danbooru.donmai.us/posts.json',
      qs: {},
      json: true
    }

  // clean options
  const params = _.chain()
  .cloneDeep(options)
  .omitBy(_.isNil)
  .omitBy(_.isNaN)
  .omitBy(_.isNull)
  .value()

  const request = _.chain()
  .cloneDeep(defaultRequestOptions)
  .set('qs', params)
  .value()

  return request
}

export const getPosts = (query: Query) => {
  return request(queryBuilder(query))
  .then(res => Promise.resolve(res))
  .catch((err) => {
    throw err
  })
}

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
  },
  getByTagPaginated: (tags: string, page: number) => {
    const options = {
      uri: 'https://danbooru.donmai.us/posts.json',
      qs: {
        rating: `${rating}`,
        tags,
        page
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
