import { validateText } from './helpFunctions.js';
import Tweet from './Tweet.js';
import Comment from './Comment.js';


class TweetCollection {
  _tweetsFilter=function (tweetsToFilter, filterParams = {}) {
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
  
  static _user = 'guest';
  _sortByDate=function() {
  return this.tweets.sort((a, b) => a.createdAt - b.createdAt)
  }
  get sortByDate() {
    return this._sortByDate;
  }
  static get user() {
    return this._user;
  }

  static set user(newUser) {
    this._user = newUser;
  }

  constructor(twts) {
    this._tweets = twts;
  }

  get tweets() {
    return this._tweets;
  }

  set tweets(newTweets) {
    this._tweets = newTweets;
  }

  addAll(twts) {
    const errorTweets = [];
    twts.forEach((tw) => { Tweet.validate(tw, this.tweets) ? this.tweets.push(tw) : errorTweets.push(tw) });
    return errorTweets;
  }

  clear() {
    this.tweets.length=0;
  }

  getPage(skip = 0,top = 10,filter = {}) {
    return this._tweetsFilter(this.sortByDate(this.tweets), filter).splice(skip, top);
  }

  get(id) {
    return this._tweets.find((t) => t.id === id);
  }

  add(newTwitText = '') {
    if (newTwitText.length > 0) {
      const newTweet = new Tweet(newTwitText);
      if (Tweet.validate(newTweet, this.tweets)) {
        this.tweets.push(newTweet);
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
    
    const index = this.tweets.findIndex(t => t===this.get(id) && t.author === TweetCollection.user);
    if (index !== -1 ) {
      this.tweets.splice(index, 1);
        return true;
    }
    else return false;
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
