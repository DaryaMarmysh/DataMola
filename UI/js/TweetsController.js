/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
/* eslint import/extensions: 0 */
/* eslint func-names: 0 */
/* eslint no-undef:0 */

import HeaderView from './HeaderView.js';
import TweetFeedView from './TweetFeedView.js';
import TweetView from './TweetView.js';
import FilterView from './FilterView.js';
import TweetCollection from './TweetCollection.js';
import LogView from './LogView.js';

class TweetsController {
  constructor(tweetsDef, headerId, tweetFeedViewId, tweetViewId, filterViewId, logViewId) {
    this.tweetCollection = new TweetCollection(tweetsDef);
    this.headerView = new HeaderView(headerId);
    this.headerView.setNewUser(this.setCurrentUser(this));///???
    this.headerView.getUser = this.getCurrentUser(this);
    this.tweetFeedView = new TweetFeedView(tweetFeedViewId);
    this.tweetView = new TweetView(tweetViewId, filterViewId);
    this.filterView = new FilterView(filterViewId);
    this.filterView.authors = this.getAuthors();
    this.logView = new LogView(logViewId);
  }

  getCurrentUser = function () {
    return TweetCollection.user;
  };

  setCurrentUser = function (userNew) {
    TweetCollection.user = userNew;
    this.headerView.display();
  };

  loginPageLoad = function (obj) {
    this.logView.display(obj);
  };

  filterBlockLoad = function () {
    this.filterView.display();
  };

  getSearchTweets = function (filterConfig) {
    console.log(filterConfig);
    this.getFeed(0, 10, filterConfig);
  };

  getFeed = function (skip = 0, top = 10, filterConfig = {}) {
    this.tweetFeedView.display(this.tweetCollection.getPage(skip, top, filterConfig));
    this.tweetFeedView.bindControllerTweets(
      this.removeTweet.bind(this),
      this.editTweet.bind(this),
      this.showTweet.bind(this),
      this.addTweet.bind(this),
    );
    this.filterView.bindControllerTweets(this.getSearchTweets.bind(this));
  };

  getAuthors = function () {
    return new Set(this.tweetCollection.tweets.map((t) => t.author));
  };

  addTweet = function (textNew) {
    if (this.tweetCollection.add(textNew)) this.getFeed();
  };

  editTweet = function (id, text) {
    if (this.tweetCollection.edit(id, text)) this.getFeed();
  };

  removeTweet = function (id) {
    if (this.tweetCollection.remove(id)) this.getFeed();
  };

  showTweet = function (id) {
    const tw = this.tweetCollection.get(id);
    if (tw) {
      this.tweetView.display(tw);
      this.tweetView.bindControllerTweets(this.getFeed.bind(this));
    }
  };
}
export default TweetsController;
