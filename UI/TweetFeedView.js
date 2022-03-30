import TweetCollection from './TweetCollection.js';

class TweetFeedView {
  constructor(containerId) {
    this.tweetFeed = document.querySelector(`#${containerId}`);
  }

  display() {
    const tw= this.tweetFeed;
    console.log(tw)
    tweetFeed.appendChild(TweetCollection.tweets);
  }
}
export default TweetFeedView;