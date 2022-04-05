class TweetView {
  constructor(containerId) {
    this.main = document.getElementById(`${containerId}`);
    this.mainTemplate = document.querySelector('#tweetPage');
    this.templateComment = document.querySelector('#commentTemplate');
    this.mainClone = this.mainTemplate.content.cloneNode(true);
    this.contComment = this.mainClone.querySelector('#commentContainer');
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
      return `<span class='hash'>${match}</span>`;
    }
    const regexp = /([#])\w*[А-я]*/g;
    return text.replace(regexp, replacer);
  }

  display(tw) {
    const authorName = this.mainClone.querySelector('#authorName');
    authorName.textContent = tw.author;
    const createDate = this.mainClone.querySelector('#createDate');
    createDate.textContent = TweetView.getDate(tw.createdAt);
    const tweetText = this.mainClone.querySelector('#tweetText');
    tweetText.innerHTML = TweetView.addHashtags(tw.text);
    const commentCount = this.mainClone.querySelector('#commentCount');
    commentCount.textContent = tw.comments.length;
    if (tw.comments.length > 0) {
      tw.comments.forEach((c) => {
        const commentClone = this.templateComment.content.cloneNode(true);
        const authorCommentName = commentClone.querySelector('#authorCommentName');
        const dateComment = commentClone.querySelector('#dateComment');
        const textComment = commentClone.querySelector('#textComment');
        authorCommentName.textContent = c.author;
        dateComment.textContent = TweetView.getDate(c.createdAt);
        textComment.innerHTML = TweetView.addHashtags(c.text);
        this.contComment.appendChild(commentClone);
      });
    }
    const replaced = document.getElementsByClassName('page-container')[0];
    this.main.replaceWith(this.mainClone);
  }
}
export default TweetView;
