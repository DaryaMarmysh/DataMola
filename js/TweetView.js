/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
class TweetView {
  constructor(containerId) {
    this.main = document.querySelector(`#${containerId}`);
    this.mainTemplate = document.querySelector('#tweetPage');
    this.templateComment = document.querySelector('#commentTemplate');
  }

  static getDate(date) {
    date = new Date(date);
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

  bindControllerTweets(returnMainFun, addCommFun) {
    const returnMainPage = document.querySelector('#returnMainPage');
    const addNewCommentButton = document.querySelector('#addNewCommentButton');
    const tweetId = document.querySelector('#mainTweet').dataset.id;
    const newCommenttextarea = document.querySelector('#newCommenttextarea');
    returnMainPage.addEventListener('click', () => {
      returnMainFun();
    });
    addNewCommentButton.addEventListener('click', (event) => {
      event.preventDefault();
      addNewCommentButton.style.pointerEvents = 'none';
      addCommFun(tweetId, newCommenttextarea.value);
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
        textComment.innerHTML = c.text; ///TweetView.addHashtags(c.text);
        contComment.appendChild(commentClone);
      });
    }
    if (this.getUsername() === 'Гость' || this.getUsername() === null) {
      const addNewCommentContainer = mainClone.querySelector('#addNewCommentContainer');
      addNewCommentContainer.classList.add('hidden');
    } else {
      const newCommentauthorName = mainClone.querySelector('#newCommentauthorName');
      newCommentauthorName.textContent = this.getUsername();
    }
    if (oldChild) {
      this.main.replaceChild(mainClone, oldChild);
    } else {
      this.main.appendChild(mainClone);
    }
    const container = document.querySelector('#mainTweet');
    container.dataset.id = tw.id;
  }
}
export default TweetView;
