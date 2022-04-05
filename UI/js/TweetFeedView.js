/* eslint no-use-before-define: 0 */
/* eslint func-names: 0 */
/* eslint no-undef:0 */
/* eslint import/extensions: 0 */

import TweetCollection from './TweetCollection.js';

class TweetFeedView {
  constructor(containerId) {
    this.main = document.querySelector(`#${containerId}`);
    this.mainTemplate = document.querySelector('#mainPage');
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

  display(tweetsForView) {
    const oldChild = document.querySelector('#pageContainer');
    const clone = this.mainTemplate.content.cloneNode(true);
    const twitList = clone.querySelector('#twit_list');
    const newTweetAuthorName = clone.querySelector('#newTweetAuthorName');
    newTweetAuthorName.textContent = TweetCollection.user;
    const tweetListContainer = document.createElement('div');
    tweetListContainer.className = 'twit-list';
    tweetListContainer.id = 'tweetListContainer';
    if (tweetsForView !== undefined) {
      tweetsForView.forEach((tw) => {
        const div = document.createElement('div');
        div.className = 'twit-item big-shadow border ';
        div.dataset.id = tw.id;
        div.innerHTML = `<div class="twit-header"><p class="author-name bold-text">${tw.author}</p>
        <p class="date grey-text text-small">${TweetFeedView.getDate(tw.createdAt)}</p></div>
        <p class="twit-text" id="twitText">${TweetFeedView.addHashtags(tw.text)}</p><div class="twit-footer" id="tweetFooter">
        <p class="comm grey-text text-small">Комментарии: ${tw.comments.length}</p>
        <div class="edit  grey-text text-small" id="editDiv">
        <p> Ред.</p><img class="edit" src="img/edit.svg">
        </img></div></div><div ><img class="del" src="img/close_twit.svg" >
        </img></div>`;
        if (tw.author === TweetCollection.user) { div.className += 'view'; }
        tweetListContainer.appendChild(div);
      });
      const existList = document.getElementById('tweetListContainer');

      twitList.appendChild(tweetListContainer);
if(oldChild)
      {this.main.replaceChild(clone, oldChild);}
      else{
        this.main.appendChild(clone);
      }
    }
  }
}

export default TweetFeedView;
