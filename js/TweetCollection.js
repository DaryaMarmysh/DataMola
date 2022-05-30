/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
/* eslint-disable no-else-return */
/* eslint-disable prefer-regex-literals */
/* eslint no-use-before-define: 0 */
/* eslint func-names: 0 */
/* eslint no-undef:0 */
/* eslint import/extensions: 0 */
/* eslint import/no-cycle: 0 */
import { validateText } from './helpFunctions.js';
import Tweet from './Tweet.js';
import Comment from './Comment.js';

class TweetCollection {
  constructor() {
   
  }

  _tweetsFilter = function (tweetsToFilter, filterParams = {}) {
    const {
      author: filterAuthor = '.',
      text: filterText = '.',
      dateFrom: filterDateFrom = new Date(2010, 1, 1),
      dateTo: filterDateTo = new Date(),
      hashtags: filterHashtags = [],
    } = filterParams;
    const regAuthor = new RegExp(`${filterAuthor}`, 'gi');
    let regHashtagsArray;
    if (filterHashtags.length > 0) {
      regHashtagsArray = filterHashtags.map((h) => new RegExp(`#${h}`, 'gi'));
    } else {
      regHashtagsArray = [new RegExp('.', 'gi')];
    }
    const regTxt = new RegExp(`${filterText}`, 'gi');
    const filteredTweets = [];
    tweetsToFilter.forEach((element) => {
      if (element.author.match(regAuthor) && new Date(element.createdAt) > new Date(filterDateFrom) 
      && new Date(element.createdAt) < new Date(filterDateTo)) {
        if (regHashtagsArray.every((r) => element.text.match(r)) && element.text.match(regTxt)) {
          filteredTweets.push(element);
        }
      } else {
        console.log(element.createdAt,filterDateTo);
      }
    }); return filteredTweets;
  };

  static _user = 'Гость';

  _sortByDate = function () {
    return this.tweets.sort((b, a) => a.createdAt - b.createdAt);
  };

  get sortByDate() {
    return this._sortByDate;
  }

  static get user() {
    return localStorage.getItem('currentUser');
  }

  static set user(newUser) {
    localStorage.setItem('currentUser', newUser);
  }

  get tweets() {
    return this._tweets;
  }

  set tweets(newTweets) {
    this._tweets = newTweets;
  }

  addAll(twts) {
    const errorTweets = [];
    twts.forEach((tw) => { Tweet.validate(tw, this.tweets) ? this.tweets.push(tw) : errorTweets.push(tw); });
    return errorTweets;
  }

  clear() {
    this.tweets.length = 0;
  }

  getPage(skip = 0, top = 10, filter = {}) {
    return this._tweetsFilter(this.sortByDate(this.tweets), filter).splice(skip, top);
  }

  get(id) {
    return this.tweets.find((t) => t.id === id);
  }

  add(newTwitText = '') {
    if (newTwitText.length > 0) {
      const newTweet = new Tweet(newTwitText);
      if (Tweet.validate(newTweet, this.tweets)) {
        this.tweets.push(newTweet);
        this.save();
         //console.log(this.tweets);
        return true;
      }
      return false;
    }
    return false;
  }

  edit(id, text) {
    const editTweet = this.get(id);
    if (editTweet && editTweet.author === TweetCollection.user && validateText(text)) {
      editTweet.text = text;
      this.save();
      return true;
    }
    return false;
  }

  remove(id) {
    const index = this.tweets.findIndex((t) => t === this.get(id) && t.author === TweetCollection.user);
    if (index !== -1) {
      this.tweets.splice(index, 1);
      this.save();
      return true;
    }
    return false;
  }

  addComment(id, text) {
    const twNewComm = new Comment(text);
    const tweetToAddComm = this.get(id);
    if (tweetToAddComm && Comment.validate(twNewComm, this.tweets)) {
      tweetToAddComm.comments.push(twNewComm);
      this.save();
      return true;
    }
    return false;
  }

}
export default TweetCollection;
