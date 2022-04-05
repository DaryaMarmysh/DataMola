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
    this.tweetFeedView = new TweetFeedView(tweetFeedViewId);
    this.tweetView = new TweetView(tweetViewId);
    this.filterView = new FilterView(filterViewId);
    this.logView = new LogView(logViewId);
  }

  setCurrentUser = function (userNew) {
    TweetCollection.user = userNew;
    this.headerView.display();
  };

  loginPageLoad = function (obj) {
    this.logView.display(obj);
  };

  getFeed = function (skip = 0, top = 10, filterConfig = {}) {
    this.tweetFeedView.display(this.tweetCollection.getPage(skip, top, filterConfig));
    const twitList = document.getElementById('twit_list');
    twitList.onclick = function (event) {
      const target = event.target;
      if (target.classList.contains('del')) {
       removeTweet(target.closest('.twit-item').dataset.id);
      } else if (target.classList.contains('edit')) {
        const editTweet = target.closest('.twit-item');
        const textarea = document.createElement('textarea');
        const paragText = editTweet.querySelector('#twitText');
        const but = document.createElement('button');
        but.innerHTML = 'Сохранить';
        but.onclick = function () {
          editTweet(editTweet.dataset.id, textarea.value);
        };
        editTweet.replaceChild(textarea, paragText);
        editTweet.querySelector('#tweetFooter').replaceChild(but, editTweet.querySelector('#editDiv'));
      } else {
        const showTweet = target.closest('.twit-item');
        showTweet(showTweet.dataset.id);
      }
    }
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
    if (tw) this.tweetView.display(tw);
  };
}
export default TweetsController;
