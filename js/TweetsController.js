/* eslint-disable max-len */
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
import TweetFeedApiService from './TweetFeedApiService.js';

class TweetsController {
  constructor(headerId, tweetFeedViewId, tweetViewId, filterViewId, logViewId, regViewId, server) {
    this.server = server;
    this.userCollection = new UserCollection();
    this.headerView = new HeaderView(headerId);
    this.headerView.username = this.getCurrentUser;
    this.tweetFeedView = new TweetFeedView(tweetFeedViewId);
    this.tweetFeedView.getUsername = this.getCurrentUser;
    this.tweetFeedView.tweetsCount = 10;
    this.tweetView = new TweetView(tweetViewId, filterViewId);
    this.tweetView.getUsername = this.getCurrentUser;
    this.filterView = new FilterView(filterViewId);
    this.filterView.authors = '';
    this.logView = new LogView(logViewId);
    this.regView = new RegView(regViewId);
    this.skip = 0;
    this.top = 10;
    this.filterParams = {};
    this.currentTweetstoView = [];
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
      this.filterView.authors = this.getAuthors();
      this.filterView.display();
    } else {
      alert('User has alredy exist');
    }
  };

  setCurrentUser = function (userNew) {
    TweetCollection.user = userNew;
    this.headerView.display();
  };

  skipTweets = function () {
    this.skip += 10;
    this.top += 10;
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
    this.tweetFeedView.tweetsCount = this.tweetCollection.getPage(0, Number.MAX_SAFE_INTEGER, filterConfig).length;
    this.filterParams = filterConfig;
    this.skip = 0;
    this.top = 10;
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

  getFeed = async function (skip = 0, top = 10, filterParams = {}) {
    this.skip = skip;
    this.top = top;
    this.filterParams = filterParams;
    this.server.getTweetsFromServer().then((data) => {
      this.currentTweetstoView = data;
     // console.log(this.currentTweetstoView);
      this.tweetFeedView.display(this.currentTweetstoView);
      this.tweetFeedView.bindControllerTweets(
        this.removeTweet.bind(this),
        this.editTweet.bind(this),
        this.showTweet.bind(this),
        this.addTweet.bind(this),
        this.skipTweets.bind(this),
        this.skip,
      );
    });

    //console.log(this.server.tweets) //this.tweetCollection.getPage(this.skip, this.top, this.filterParams);

  };

  getAuthors = function () {
    // return new Set(this.tweetCollection.tweets.map((t) => t.author));
    return this.userCollection.users.map((u) => u.name);
  };

  addTweet = function (textNew) {
    //if (this.server.addNewTweet(textNew)) {
      this.server.addNewTweet(textNew);
      this.getFeed();
   // }
  };

  editTweet = function (id, text) {
    this.server.editTweet(id, text);
    this.getFeed();
  };

  removeTweet = function (id) {
    this.server.deleteTweet(id);
    this.getFeed();
  };

  addComment = function (id, text) {
    this.server.addNewComment(id, text);
    this.showTweet(id);
  };

  showTweet = function (id) {
    const tw = this.currentTweetstoView.find((tw)=>tw.id===id)
    if (tw) {
      this.tweetView.display(tw);
      this.tweetView.bindControllerTweets(this.getFeed.bind(this), this.addComment.bind(this));
    }
  };
}
export default TweetsController;
