class TweetView {
  constructor(containerId) {
    this.main = document.querySelector(`#${containerId}`);
    this.mainTemplate = document.querySelector('#tweetPage');
    this.templateComment = document.querySelector('#commentTemplate');
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

  bindControllerTweets(returnMainFun) {
    const returnMainPage = document.querySelector('#returnMainPage');
    returnMainPage.addEventListener('click', () => {
      returnMainFun();
    });
  }

  display(tw) {
    const oldChild = document.querySelector('#pageContainer');
    const mainClone = this.mainTemplate.content.cloneNode(true);
    const contComment = mainClone.querySelector('#commentContainer');
    const authorName = mainClone.querySelector('#authorName');
    authorName.textContent = tw.author;
    const createDate = mainClone.querySelector('#createDate');
    createDate.textContent = TweetView.getDate(tw.createdAt);
    const tweetText = mainClone.querySelector('#tweetText');
    tweetText.innerHTML = TweetView.addHashtags(tw.text);
    const commentCount = mainClone.querySelector('#commentCount');
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
        contComment.appendChild(commentClone);
      });
    }
    if (oldChild) {
      this.main.replaceChild(mainClone, oldChild);
    } else {
      this.main.appendChild(mainClone);
    }
  }
}
export default TweetView;
