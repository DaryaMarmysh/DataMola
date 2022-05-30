/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
/* eslint import/extensions: 0 */
/* eslint func-names: 0 */

import HeaderView from './HeaderView.js';
import TweetFeedView from './TweetFeedView.js';
import TweetView from './TweetView.js';
import FilterView from './FilterView.js';
import LogView from './LogView.js';
import ErrorView from './ErrorView.js';
import RegView from './RegView.js';

class TweetsController {
  constructor(headerId, tweetFeedViewId, tweetViewId, filterViewId, logViewId, regViewId, server, errorId) {
    this.server = server;
    this.errorView = new ErrorView(errorId);
    this.errorView.loginPLoad = this.loginPageLoad.bind(this);
    this.errorView.mainPageLoad = this.getFeed.bind(this);
    this.headerView = new HeaderView(headerId);
    this.tweetFeedView = new TweetFeedView(tweetFeedViewId);
    this.headerView.currentUser = this.getCurrentUser;
    this.tweetFeedView.currentUser = this.getCurrentUser;
    this.tweetFeedView.tweetsCount = 10;
    this.tweetView = new TweetView(tweetViewId, filterViewId);
    this.tweetView.getUsername = this.getCurrentUser;
    this.filterView = new FilterView(filterViewId);
    this.logView = new LogView(logViewId);
    this.regView = new RegView(regViewId);
    this.skip = 0;
    this.top = 10;
    this.filterParams = {};
    this.currentTweetstoView = [];
    this.tweetFeedView.skip = this.skip;
    this.headerView.display();
    this.allTweets = [];
    this.server.loadErrorPage = this.loadErrorPage.bind(this);
    this.setAllTweets();
    this.getFeed();
    this.getAllTweets();
    this.footerVer();
  }

  getAllTweets = async function () {
    if (this.getCurrentUser() !== 'Гость' && this.getCurrentUser() !== null) {
      this.loginUser(this.getCurrentUser(), localStorage.getItem('password'));
    }
    setInterval(async () => {
      await this.server.getTweetsFromServer(0, Number.MAX_SAFE_INTEGER, {}).then((data) => {
        this.allTweets = data;
        this.filterView.authors = Array.from(new Set(this.allTweets.map((t) => t.author)));
      })
        .catch((error) => console.log(error.status));
    }, 300000);
  };

  loadErrorPage = function (status) {
    this.errorView.display(status);
  };

  getCurrentUser = function () {
    return localStorage.getItem('currentUser');
  };

  setCurrentUser = function (userNew, token, password) {
    this.currentUser = userNew;
    localStorage.setItem('currentUser', userNew);
    localStorage.setItem('token', token);
    localStorage.setItem('password', password);
    this.headerView.display();
  };

  displayHeader = function () {
    this.headerView.display();
  };

  addnewUser = function (login, password) {
    this.server.registerUser(login, password).then((data) => {
      data = data.json();
      this.server.token = data.token;
      this.loginPageLoad();
    });
  };

  setAllTweets = async function () {
    await this.server.getTweetsFromServer(0, 1000, {}).then((data) => {
      this.allTweets = data;
      this.filterView.authors = Array.from(new Set(this.allTweets.map((t) => t.author)));
      this.filterView.display();
      this.bindFunction();
    });
  };

  skipTweets = function () {
    // this.skip += 10;
    this.top += 10;
    this.getFeed(this.skip, this.top, this.filterParams);
  };

  loginPageLoad = function () {
    this.logView.display();
    this.logView.bindControllerTweets(this.loginUser.bind(this), this.regPageLoad.bind(this), this.getFeed.bind(this));
  };

  regPageLoad = function () {
    this.regView.display();
    this.regView.bindControllerTweets(this.addnewUser.bind(this), this.loginPageLoad.bind(this), this.getFeed.bind(this));
  };

  loginUser = function (login, password) {
    this.server.loginUser(login, password).then((data) => {
      return data.json();
    })
      .then((data) => {
        this.server.token = data.token;
        this.setCurrentUser(login, data.token, password);
        this.getFeed();
      });
  };

  filterBlockLoad = function () {
    this.filterView.display();
  };

  getSearchTweets = function (filterConfig) {
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

  getFeed = function () {
    this.server.getTweetsFromServer(this.skip, this.top, this.filterParams).then((data) => {
      if (data !== undefined) {
        this.currentTweetstoView = data;
        this.tweetFeedView.tweetsCount = this.currentTweetstoView.length;
        this.tweetFeedView.display(this.currentTweetstoView);
        this.tweetFeedView.bindControllerTweets(
          this.removeTweet.bind(this),
          this.editTweet.bind(this),
          this.showTweet.bind(this),
          this.addTweet.bind(this),
          this.skipTweets.bind(this),
          this.getCurrentUser.bind(this),
        );
      }
    });
  };

  getAuthors = function () {
    const authors = Array.from(new Set(this.allTweets.map((t) => t.author)));
    return authors;
  };

  addTweet = function (textNew) {
    this.server.addNewTweet(textNew).then((data) => {
      return data.json();
    })
      .then((data) => {
        if (data) { this.setAllTweets(); this.getFeed(); }
      });
  };

  editTweet = function (id, text) {
    this.server.editTweet(id, text).then((data) => {
      if (data) { this.getFeed(); }
    });
  };

  removeTweet = function (id) {
    this.server.deleteTweet(id).then((data) => {
      if (data) { this.getFeed(); }
    });
  };

  addComment = function (id, text) {
    this.server.addNewComment(id, text)
      .then((data) => {
        if (data) {
          this.setAllTweets().then(() => this.showTweet(id));
        }
      });
  };

  showTweet = function (id) {
    const tw = this.allTweets.find((twt) => twt.id === id);
    if (tw) {
      this.tweetView.display(tw);
      this.tweetView.bindControllerTweets(this.getFeed.bind(this), this.addComment.bind(this));
    }
  };

  footerVer = async function () {
    await fetch('https://api.github.com/repos/DaryaMarmysh/DataMola/branches/master').then((res) => {
      if (res.ok) {
        return res.json();
      } return Promise.reject(res);
    })
      .then((data) => document.querySelector('.ver').innerHTML = data.commit.commit.committer.date.slice(0, 10))
      .catch((error) => console.log(error.status));
  }
}
export default TweetsController;
