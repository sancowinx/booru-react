export default {
  rating: process.env.RATING || 'e',
  itemPerPage: process.env.ITEM_LOAD_PER_PAGE || '25',
  danbooruApiKey: process.env.DANBOORU_API_KEY,
  yandereApiKey: process.env.YANDERE_API_KEY
}


// https://danbooru.donmai.us/posts?tags=help%3Acheatsheet

/*
  rating:explicit or rating:e
  >>> Search for posts that are rated explicit.

  rating:questionable or rating:q
  >>> Search for posts that are rated questionable.

  rating:safe or rating:s
  >>> Search for posts that are rated safe.

  -rating:safe or -rating:s
  >>> Search for posts that are not rated safe.
*/
