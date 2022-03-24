import { setId, validateParams } from './helpFunctions.js';
import TweetCollection from './TweetCollection.js';


class Comment {
  constructor(newText) {
    this._id = setId();
    this._author = TweetCollection.user;
    this.text = newText;
    this._createdAt = new Date();
  }

  get id() { return this._id; }

  set id(value) { }

  get author() { return this._author; }

  set author(value) { }

  get createdAt() { return this._createdAt }

  set createdAt(value) { }

  static validate(com) {
    if (com !== undefined && com instanceof Comment) {
      return (validateParams(com.id, com.text, com.createdAt, com.author));
    }
    return false;
  }
}
export default Comment;
