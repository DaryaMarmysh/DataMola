class TweetView {
  constructor(containerId, newWindow) {
    this.tweetWindow = newWindow;
    this.mainTweet = this.tweetWindow.document.querySelector(`#${containerId}`);
  }

  static getDate(date) {
    const month = [
      'Января',
      'Февраля',
      'Марта',
      'Апреля',
      'Мая',
      'Июня',
      'Июля',
      'Августа',
      'Сентября',
      'Ноября',
      'Декабря',
    ];
    return `${date.getDate()} ${month[date.getMonth() - 1]} ${date.getFullYear()} ${date.toLocaleTimeString().substring(0, 5)}`;
  }

  static addHashtags(text) {
    function replacer(match) {
      return `<span class="hash">${match}</span>`;
    }
    const regexp = /([#])\w*[А-я]*/g;
    return text.replace(regexp, replacer);
  }

  display(tw) {
      const contComment = this.tweetWindow.document.querySelector("#commentContainer");
      const template = this.tweetWindow.document.querySelector('#mainTweetTemplate');
      const templateComment = this.tweetWindow.document.querySelector('#commentTemplate');
      const clone = template.content.cloneNode(true);
      const authorName = clone.querySelector("#authorName");
      authorName.textContent = tw.author;
      const createDate = clone.querySelector("#createDate");
      createDate.textContent = TweetView.getDate(tw.createdAt);
      const tweetText = clone.querySelector("#tweetText");
      tweetText.innerHTML = TweetView.addHashtags(tw.text);
      const commentCount = clone.querySelector("#commentCount");
      commentCount.textContent = tw.comments.length;
      const commentClone = templateComment.content.cloneNode(true);
      if (tw.comments.length > 0) {
        const authorCommentName = commentClone.querySelector("#authorCommentName");
        const dateComment = commentClone.querySelector("#dateComment");
        const textComment = commentClone.querySelector("#textComment");
        tw.comments.forEach((c) => {
          authorCommentName.textContent = c.author;
          dateComment.textContent = TweetView.getDate(c.createdAt);
          textComment.innerHTML = TweetView.addHashtags(c.text);
          contComment.appendChild(commentClone);
        });
      }
      this.mainTweet.appendChild(clone);
    };
  
}
export default TweetView;