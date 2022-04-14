/* eslint-disable prefer-destructuring */
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

  static getDate(dateformat) {
    const date = new Date(dateformat);
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

    return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()} ${date.toLocaleTimeString().substring(0, 5)}`;
  }

  static addHashtags(text) {
    function replacer(match) {
      return `<span class="hash">${match}</span>`;
    }
    const regexp = /([#])\w*[А-я]*/g;
    return text.replace(regexp, replacer);
  }

  bindControllerTweets(removeFun, editFun, showFun, addFun, skipFun, skip, top) {
    document.addEventListener('click', (event) => {
      if (event.target.id !== 'modalWindow' && document.getElementById('modalWindow')) {
        document.getElementById('modalWindow').remove();
      }
    });
    const moreTweetsButton = document.getElementById('moreTweetsButton');
    const listener = function (event) {
      const target = event.target;
      if (target.classList.contains('del')) {
        const modalTemplate = document.querySelector('#modalTemplate');
        const cloneModal = modalTemplate.content.cloneNode(true);
        const confirmDelete = cloneModal.querySelector('#confirmDelete');
        const cansel = cloneModal.querySelector('#cansel');
        event.stopImmediatePropagation();
        confirmDelete.onclick = function () {
          removeFun(target.closest('.twit-item').dataset.id);
          document.getElementById('modalWindow').remove();
        };
        cansel.onclick = function () {
          document.getElementById('modalWindow').remove();
        };
        document.querySelector('#main').appendChild(cloneModal);
        //
      } else if (target.classList.contains('edit')) {
        twitList.removeEventListener('click', listener, false);
        const editTweet = target.closest('.twit-item');
        const textarea = document.createElement('textarea');
        const paragText = editTweet.querySelector('#twitText');
        textarea.value = paragText.textContent;
        const but = document.createElement('button');
        but.innerHTML = 'Сохранить';
        but.onclick = function () {
          editFun(editTweet.dataset.id, textarea.value);
        };
        editTweet.replaceChild(textarea, paragText);
        textarea.focus();
        editTweet.querySelector('#tweetFooter').replaceChild(but, editTweet.querySelector('#editDiv'));
      } else {
        const showTweet = target.closest('.twit-item');
        if (showTweet) { showFun(showTweet.dataset.id); }
      }
    };
    if (this.tweetsCount % 10 !== 0) {
      document.getElementById('moreTweetsButton').classList.add('hidden');
      
    }
    if (this.tweetsCount === 0) {
        document.getElementById('noTweetMessage').classList.remove('hidden');
        document.getElementById('moreTweetsButton').classList.add('hidden');
      }
    moreTweetsButton.addEventListener('click', () => {
      skipFun();
    });
    const twitList = document.querySelector('#twit_list');
    const newTweetBut = document.querySelector('#addNewTweet');
    newTweetBut.addEventListener('click', () => {
      const newTweetText = document.querySelector('#textareaNewTweet').value;
      addFun(newTweetText);
    });
    twitList.addEventListener('click', listener, false);
  }

  display(tweetsForView) {
    const clone = this.mainTemplate.content.cloneNode(true);
    const oldChild = document.querySelector('#pageContainer');
    const twitList = clone.querySelector('#twit_list');
    if (this.getUsername() === 'Гость') {
      const newTweetContainer = clone.querySelector('#newTweetContainer');
      newTweetContainer.classList.add('hidden');
    } else {
      const newTweetAuthorName = clone.querySelector('#newTweetAuthorName');
      newTweetAuthorName.textContent = this.getUsername();
    }
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
      twitList.appendChild(tweetListContainer);
    }
    const openFilterBut = clone.querySelector('#filterBut');
    openFilterBut.addEventListener('click', () => {
      filterContainer.classList.remove('close');
    });
    if (oldChild) { this.main.replaceChild(clone, oldChild); }
    else {
      this.main.appendChild(clone);
    }
  }
}

export default TweetFeedView;
