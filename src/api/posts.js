import request from 'request-promise'

// request-promise parse results as stringified json

export default {
  posts: () => {
    return request
    .get('https://danbooru.donmai.us/posts.json')
    .then((res) => {
      return Promise.resolve(res)
    })
    .catch((err) => {
      throw err
    })
  }
}