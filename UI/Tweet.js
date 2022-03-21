/* eslint-disable */

import { setId, validateParams } from './helpFunctions.js';
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

  addComment(text) {
    const twNewComm = new Comment(text);
    if (Comment.validate(twNewComm)) {
      this.comments.push(twNewComm);
      return true;
    }
    return false;
  }

  static validate(tw) {
    if (tw !== undefined && tw instanceof Tweet) {
      if (validateParams(tw.id, tw.text, tw.createdAt, tw.author)) {
        if (Array.isArray(tw.comments)) {
          return true;
        }
        return false;
      }
    }
    return false;
  }
}
export default Tweet;
