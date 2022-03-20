import { getTweets } from './modules/main_module.js';

const myWindow = window;
const myDocument = document;
const filter = myDocument.getElementsByClassName('filter')[0];
function myFunction() {
  filter.classList.toggle('close');
}
function getDate(date) {
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
function replacer(match) {
  return `<span class="hash">${match}</span>`;
}
function addHashtags(text) {
  const span = myDocument.createElement('span');
  span.className = 'hash';
  const regexp = /([#])\w*[А-я]*/g;
  return text.replace(regexp, replacer);
}
/* function clickTwit(e) {
  const mytTarget = e.target;
   if (target.classList.contains('edit')|| target.tagName=='OBJECT') {
      alert('edit')
  }
  if (target.classList.contains('del')) {
      alert('del')
  }
} */

myWindow.onload = function () {
  const showFilter = myDocument.getElementsByClassName('show-filter')[0];
  showFilter.addEventListener('click', myFunction, false);
  const currentUser = myDocument.getElementsByClassName('name')[0];
  currentUser.innerHTML = 'Gtnhjd Gtnh';
  const list = myDocument.getElementsByClassName('twit-list')[0];
  getTweets().forEach((twit) => {
    const div = myDocument.createElement('div');
    div.className = 'twit-item big-shadow border ';
    div.innerHTML = `<div class="twit-header"><p class="author-name bold-text">${twit.author}</p><p class="date grey-text text-small">${getDate(twit.createdAt)}</p></div><p class="twit-text">${addHashtags(twit.text)}</p><div class="twit-footer"><p class="comm grey-text text-small">Комментарии: ${twit.comments.length}</p><div class="edit  grey-text text-small"><p> Ред.</p><object type="image/svg+xml" data="img/edit.svg"></object></div></div><div class="del"><object type="image/svg+xml" data="img/close_twit.svg" ></object></div>`;
    if (twit.author === 'Gtnhjd Gtnh') { div.className += 'view'; }
    // div.onclick = clickTwit;
    list.appendChild(div);
  });
};
