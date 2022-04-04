/* eslint-disable class-methods-use-this */
/* eslint import/extensions: 0 */
/* eslint func-names: 0 */
/* eslint no-undef:0 */

import HeaderView from './HeaderView.js';
import TweetFeedView from './TweetFeedView.js';
import TweetView from './TweetView.js';
import FilterView from './FilterView.js';
import TweetCollection from './TweetCollection.js';

class TweetsController {
  constructor(tweetsDef, headerId, tweetFeedViewId, tweetViewId, filterViewId) {
    this.tweetCollection = new TweetCollection(tweetsDef);
    this.headerView = new HeaderView(headerId);
    this.tweetFeedView = new TweetFeedView(tweetFeedViewId);
    this.tweetView = new TweetView(tweetViewId);
    this.filterView = new FilterView(filterViewId);
  }

  setCurrentUser = function (userNew) {
    TweetCollection.user = userNew;
    this.headerView.display();
  };

  getFeed = function (skip = 0, top = 10, filterConfig = {}) {
    this.tweetFeedView.display(this.tweetCollection.getPage(skip, top, filterConfig));
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
