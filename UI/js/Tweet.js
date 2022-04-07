/*eslint no-underscore-dangle: "error"*/
import TweetCollection from './TweetCollection.js';
import Comment from './Comment.js';

class Tweet {

  _setId = function () {
    return Date.now().toString();
  }
  static _validateId = function (id, set) {
    if (id !== undefined && typeof id === 'string') {
      for (const value of set) {
        if (value.comments.length > 0) {
          if (value.comments.findIndex((c) => c.id === id) !== -1) {
            return false;
          }
        }
        if (value.id === id) { return false; }
      }
      return true;
    }
    return false;
  }
  static _validateText = function (text) {
    if (text !== undefined && text.trim() !== '') {
      return text.length < 280;
    }
    return false;
  }
  static _validateDate = function (date) {
    if (date !== undefined) { return !Number.isNaN(date.getTime()); }
    return false;
  }
  static _validateAuthor = function (name) {
    if (name !== undefined) {
      return name.length > 0;
    }
    return false;
  }
  constructor(text) {
    this._id = this._setId();
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
      return (Tweet._validateId(tw.id, set)
        && Tweet._validateText(tw.text)
        && Tweet._validateDate(tw.createdAt)
        && Tweet._validateAuthor(tw.author)
        && Array.isArray(tw.comments))
    } false;
  }
}
export default Tweet;
