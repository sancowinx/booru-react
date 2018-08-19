import Posts from './posts';

export default {
  Posts,
};

// danbooru allows only 'preview_file_url' on external domain, otherwise: CORS
// need to change to class
// make query builder
class ApiClass {
  constructor() {
    this.rating = process.env.RATING ? `rating:${process.env.RATING}` : 'rating:s';


    // this.Posts = Posts
    this.Posts = Posts.get.bind(this, this.rating);
  }


  _queryBuilder() {

  }
}

export { ApiClass };
