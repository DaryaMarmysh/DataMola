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
    localStorage.setItem('currentUser', 'Гость');
    // this.currentUser = ;
    this.errorView = new ErrorView(errorId);
    this.headerView = new HeaderView(headerId);
    this.headerView.username = this.getCurrentUser;
    this.tweetFeedView = new TweetFeedView(tweetFeedViewId);
    this.tweetFeedView.getUsername = this.getCurrentUser;
    this.tweetFeedView.tweetsCount = 10;
    this.tweetView = new TweetView(tweetViewId, filterViewId);
    this.tweetView.getUsername = this.getCurrentUser;
    this.filterView = new FilterView(filterViewId);
    //this.allAuthors = this.getAuthors();
    //console.log(this.allAuthors);
    this.filterView.authors = [];
    this.logView = new LogView(logViewId);
    this.regView = new RegView(regViewId);
    this.skip = 0;
    this.top = 10;
    this.filterParams = {};
    this.currentTweetstoView = [];
    this.tweetFeedView.skip = this.skip;
    this.headerView.display();
    this.filterView.display();
    this.allTweets = [];
    this.filterView.authors = this.allAuthors;
    this.server.loadErrorPage = this.loadErrorPage.bind(this);
    this.setAllTweets();
    this.getFeed();
    /* this.server.getTweetsFromServer(0, 1000, {}).then((data)=>{
      this.allTweets=data; 
    })*/

  }

  loadErrorPage = function (status) {
    this.errorView.display(status);
  };

  getCurrentUser = function () {
    return localStorage.getItem('currentUser');
  };

  setCurrentUser = function (userNew) {
    localStorage.setItem('currentUser', userNew);
    this.headerView.display();
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

  setAllTweets = async function () {
    await this.server.getTweetsFromServer(0, 1000, {}).then((data) => {
      this.allTweets = data;
    });
  };

  skipTweets = function () {
    this.skip += 10;
    this.top += 10;
    this.getFeed(this.skip, this.top, this.filterParams);
  };

  loginPageLoad = function () {
    this.logView.display();
    this.logView.bindControllerTweets(this.loginUser.bind(this), this.regPageLoad.bind(this));
  };

  regPageLoad = function () {
    this.regView.display();
    this.regView.bindControllerTweets(this.server.loginUser.bind(this), this.addnewUser.bind(this), this.loginPageLoad.bind(this));
  };

  loginUser = function (login, password) {
    this.server.loginUser(login, password).then((data) => {
      this.server.token = data.token;
      //console.log(data.token)
      this.setCurrentUser(login);
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

  getFeed = function (skip = 0, top = 10, filterParams = {}) {
    this.skip = skip;
    this.top = top;
    this.filterParams = filterParams;
    this.server.getTweetsFromServer(this.skip, this.top, this.filterParams).then((data) => {
      if (data !== undefined) {
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
      }
    });
  };

  getAuthors = function () {
    const authors = Array.from(new Set(this.allTweets.map((t) => t.author)));
    console.log(authors);
    return authors;
  };

  addTweet = function (textNew) {
    this.server.addNewTweet(textNew).then((data) => {
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
          this.setAllTweets();
          //новый коммент не добавляется
          this.showTweet(id);
        }
      });//не обновляет лентукомментов;
  };

  showTweet = function (id) {
    this.setAllTweets();
    console.log(this.allTweets)
    const tw = this.allTweets.find((twt) => twt.id === id);
    if (tw) {
      this.tweetView.display(tw);
      this.tweetView.bindControllerTweets(this.getFeed.bind(this), this.addComment.bind(this));
    }
  };
}
export default TweetsController;
