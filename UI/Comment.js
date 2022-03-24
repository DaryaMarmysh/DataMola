import { setId, validateId, validateText, validateDate, validateAuthor }  from './helpFunctions.js';
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

  static validate(com, set) {
    if (com !== undefined && com instanceof Comment) {
      if (validateId(com.id, set)
        && validateText(com.text)
        && validateDate(com.createdAt)
        && validateAuthor(com.author)) {
        return true;
      } return false;
    }
    return false;
  }
}
export default Comment;
