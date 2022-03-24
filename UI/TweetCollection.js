import { validateText } from './helpFunctions.js';
import Tweet from './Tweet.js';
import Comment from './Comment.js';

function tweetsFilter(tweetsToFilter, filterParams = {}) {
  const {
    author: filterAuthor = '.',
    text: filterText = '.',
    dateFrom: filterDateFrom = new Date(2010, 1, 1),
    dateTo: filterDateTo = new Date(),
    hashtags: filterHashtags = []
  } = filterParams;
  const regAuthor = new RegExp(`${filterAuthor}`, "gi");
  let regHashtagsArray;
  if (filterHashtags.length > 0) {
    regHashtagsArray = filterHashtags.map(h => new RegExp(`#+[А-яa-z0-9_]*[${h}]+[А-яa-z0-9_]*`, "gi"));
  }
  else {
    regHashtagsArray = [new RegExp(`.`, "gi")];
  }
  const regTxt = new RegExp(`${filterText}`, "gi");
  let filteredTweets = [];
  tweetsToFilter.forEach(element => {
    if (regAuthor.test(element.author) &&
      element.createdAt >= filterDateFrom &&
      element.createdAt <= filterDateTo &&
      regHashtagsArray.every(r => r.test(element.text)) &&
      regTxt.test(element.text)) {
      filteredTweets.push(element);
    }
  });
  return filteredTweets;
}
class TweetCollection {
  static _user = 'Петров Петр';
  _sortByDate=function() {
  return new Set(Array.from(this.tweets).sort((a, b) => a.createdAt - b.createdAt));
  }
  get sortByDate() {
    return this._sortByDate;
  }
  static get user() {
    return this._user;
  }

  set user(newUser) {
    this._user = newUser;
  }

  constructor(twts) {
    this._tweets = new Set(twts);
  }

  get tweets() {
    return this._tweets;
  }

  set tweets(newTweets) {
    this._tweets = newTweets;
  }

  addAll(twts) {
    const errorTweets = [];
    twts.forEach((tw) => { Tweet.validate(tw, this.tweets) ? this._tweets.add(tw) : errorTweets.push(tw) });
    return errorTweets;
  }

  clear() {
    this._tweets.clear();
  }

  getPage(...args) {
    let skip = 0;
    let top = 10;
    let filter = {};
    if (typeof args[0] === 'number') {
      [skip] = args;
      if (typeof args[1] === 'number') {
        [, top] = args;
        if (typeof args[2] === 'object') {
          [, , filter] = args;
        }
      } else if (typeof args[1] === 'object') {
        [, filter] = args;
      }
    } else if (typeof args[0] === 'object') {
      [filter] = args;
    }
    return tweetsFilter(this.sortByDate(this.tweets), filter).splice(skip, top);
  }

  get(id) {
    let tw;
    this._tweets.forEach((t) => t.id === id ? tw = t : undefined);
    return tw !== undefined ? tw : false;
  }

  add(newTwitText = '') {
    if (newTwitText.length > 0) {
      const newTweet = new Tweet(newTwitText);
      if (Tweet.validate(newTweet, this.tweets)) {
        this._tweets.add(newTweet);
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
      return true;
    }
    return false;
  }

  remove(id) {
    const removeTweet = this.get(id);
    if (removeTweet && removeTweet.author === TweetCollection.user) {
      this._tweets.delete(removeTweet); return true;
    } return false;
  }

  addComment(id, text) {
    const twNewComm = new Comment(text);
    const tweetToAddComm = this.get(id);
    if (tweetToAddComm && Comment.validate(twNewComm, this.tweets)) {
      tweetToAddComm.comments.push(twNewComm);
      return true;
    }
    return false;
  }
}
export default TweetCollection;
