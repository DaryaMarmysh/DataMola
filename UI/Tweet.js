/*eslint no-underscore-dangle: "error"*/

import {
  setId, validateId, validateText, validateDate, validateAuthor,
} from './helpFunctions.js';
import TweetCollection from './TweetCollection.js';
import Comment from './Comment.js';

class Tweet {
  constructor(text) {
    this._id = setId();
    this._author = TweetCollection.user;
    this.text = text;
    this._createdAt = new Date();
    this.comments = [];
  }

  get id() { return this._id; }

  set id(value) { }

  get author() { return this._author; }

  set author(value) { }

  get createdAt() { return this._createdAt }

  set createdAt(value) { }

  static validate(tw, set) {
    if (tw !== undefined) {
      if (validateId(tw.id, set)
        && validateText(tw.text)
        && validateDate(tw.createdAt)
        && validateAuthor(tw.author)
        && Array.isArray(tw.comments)) {
        return true;
      } return false;
    } return false;
  }
}
export default Tweet;
