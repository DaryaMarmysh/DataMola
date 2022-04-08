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
import UserCollection from './UserCollection.js';
import RegView from './RegView.js';

class TweetsController {
  constructor(headerId, tweetFeedViewId, tweetViewId, filterViewId, logViewId, regViewId) {
    this.userCollection = new UserCollection();
    this.tweetCollection = new TweetCollection();
    this.headerView = new HeaderView(headerId);
    //this.headerView.setNewUser = this.setCurrentUser(this);///???
    this.headerView.username = this.getCurrentUser;
    this.tweetFeedView = new TweetFeedView(tweetFeedViewId);
    this.tweetFeedView.getUsername = this.getCurrentUser;
    this.tweetView = new TweetView(tweetViewId, filterViewId);
    this.tweetView.getUsername = this.getCurrentUser;
    this.filterView = new FilterView(filterViewId);
    this.filterView.authors = this.getAuthors();
    this.logView = new LogView(logViewId);
    this.regView = new RegView(regViewId);
    this.skip = 0;
    this.top = 10;
    this.filterParams = {};
    this.tweetFeedView.skip = this.skip;
  }

  getCurrentUser = function () {
    return TweetCollection.user;
  };

  displayHeader = function () {
    this.headerView.display();
  };

  addnewUser = function (newUserName, newUserPassword) {
    const newUserToSet = this.userCollection.add(newUserName, newUserPassword);
    if (newUserToSet) {
      this.setCurrentUser(newUserToSet.name);
      this.getFeed();
      let users = JSON.parse(localStorage.getItem('users'));
      users.push(newUserToSet);
      users = JSON.stringify(users);
      localStorage.setItem('users', users);
    }
    else {
      alert('User has alredy exist');
    }
  };

  setCurrentUser = function (userNew) {
    TweetCollection.user = userNew;
    this.headerView.display();
  };

  skipTweets = function () {
    this.skip += 10;
    this.getFeed(this.skip, this.top, this.filterParams);
  };

  loginPageLoad = function () {
    this.logView.display();
    this.logView.bindControllerTweets(this.setCurrentUser.bind(this), this.getFeed.bind(this), this.regPageLoad.bind(this));
  };

  regPageLoad = function () {
    this.regView.display();
    this.regView.bindControllerTweets(this.addnewUser.bind(this), this.loginPageLoad.bind(this));
  };

  filterBlockLoad = function () {
    this.filterView.display();
  };

  getSearchTweets = function (filterConfig) {
    this.filterParams = filterConfig;
    this.getFeed(this.skip, this.top, this.filterParams);
  };

  bindFunction = function () {
    this.filterView.bindControllerTweets(this.getSearchTweets.bind(this));
    this.headerView.bindControllerTweets(
      this.loginPageLoad.bind(this),
      this.getFeed.bind(this),
      this.setCurrentUser.bind(this),
    );
  };

  getFeed = function (skip = 0, top = 10, filterConfig = {}) {
    this.tweetFeedView.display(this.tweetCollection.getPage(skip, top, filterConfig));
    this.tweetFeedView.bindControllerTweets(
      this.removeTweet.bind(this),
      this.editTweet.bind(this),
      this.showTweet.bind(this),
      this.addTweet.bind(this),
      this.skipTweets.bind(this),
    );
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

  addComment = function (id, text) {
    if (this.tweetCollection.addComment(id, text)) this.showTweet(id);
  };

  showTweet = function (id) {
    const tw = this.tweetCollection.get(id);
    if (tw) {
      this.tweetView.display(tw);
      this.tweetView.bindControllerTweets(this.getFeed.bind(this), this.addComment.bind(this));
    }
  };
}
export default TweetsController;
