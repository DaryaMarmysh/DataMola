import TweetCollection from './TweetCollection.js';
import Tweet from './Tweet.js';
import HeaderView from './HeaderView.js';
import TweetFeedView from './TweetFeedView.js';
import TweetView from './TweetView.js';

const tweetsDef = [
  {
    id: '1',
    text: 'Привет!#hi  #datamola  #js',
    createdAt: new Date('2022-02-09T19:25:00'),
    author: 'Петров Петр',
    comments: [],

  },
  {
    id: '2',
    text: 'Какие #дела? #hi  #datamola  #js',
    createdAt: new Date('2022-02-10T23:00:01'),
    author: 'Даша Мармыш',
    comments: [{
      id: '201',
      text: 'Хорошо, а у тебя?',
      createdAt: new Date('2022-03-09T23:00:05'),
      author: 'Иванов Иван',
    }],
  },
  {
    id: '3',
    text: 'Душа моя озарена неземной радостью, как эти чудесные весенние утра, #которыми я наслаждаюсь от всего сердца. #js',
    createdAt: new Date('2022-02-10T23:00:01'),
    author: 'Даша Мармыш',
    comments: [{
      id: '301',
      text: 'Душа моя озарена неземной радостью, как эти чудесные весенние утра.',
      createdAt: new Date('2022-03-09T23:00:05'),
      author: 'Иванов Иван',
    }, {
      id: '302',
      text: 'Душа моя озарена неземной радостью, как эти чудесные весенние утра.',
      createdAt: new Date('2022-03-09T23:00:05'),
      author: 'Иванов Иван',
    }],
  },
  {
    id: '4',
    text: 'Душа моя озарена неземной радостью, как эти чудесные весенние утра, #которыми я наслаждаюсь от всего #js сердца.',
    createdAt: new Date('2022-02-11T23:00:01'),
    author: 'Петров Петр',
    comments: [],
  },
  {
    id: '5',
    text: 'Проснувшись #однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на панцирнотвердой спине, он видел',
    createdAt: new Date('2022-02-12T23:00:01'),
    author: 'Даша Мармыш',
    comments: [],
  },
  {
    id: '6',
    text: 'Лишь многие известные личности указаны как претенденты на роль ключевых факторов. В частности, постоянный количественный рост и сфера нашей активности в #значительной степени обусловливает важность форм воздействия.',
    createdAt: new Date('2022-02-12T23:00:01'),
    author: 'Петров Петр',
    comments: [],
  },
  {
    id: '7',
    text: 'Есть над чем задуматься: сторонники тоталитаризма в науке, превозмогая сложившуюся непростую экономическую ситуацию, объявлены нарушающими #общечеловеческие нормы этики и морали. Банальные, но неопровержимые выводы, а также реплицированные с зарубежных источников',
    createdAt: new Date('2022-02-13T23:00:01'),
    author: 'Даша Мармыш',
    comments: [{
      id: '701',
      text: 'Хорошо, а у тебя?',
      createdAt: new Date('2022-03-09T23:00:05'),
      author: 'Иванов Иван',
    }],
  },
  {
    id: '8',
    text: 'Лишь независимые государства являются только методом  и финансовых предпосылок! Ключевые особенности структуры проекта формируют глобальную экономическую сеть и при этом - обнародованы. ',
    createdAt: new Date('2022-02-14T23:00:01'),
    author: 'Петров Петр',
    comments: [],
  },
  {
    id: '9',
    text: 'Лишь независимые государства являются #jsтолько методом  и финансовых предпосылок! Ключевые особенности структуры проекта формируют глобальную экономическую сеть и при этом - обнародованы. ',
    createdAt: new Date('2022-02-15T23:00:01'),
    author: 'Петров Петр',
    comments: [{
      id: '901',
      text: 'Хорошо, а у тебя?',
      createdAt: new Date('2022-03-09T23:00:05'),
      author: 'Иванов Иван',
    }],
  },
  {
    id: '10',
    text: 'Проснувшись однажды утром после #jsбеспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову',
    createdAt: new Date('2022-02-16T23:00:01'),
    author: 'Петров Петр',
    comments: [],
  },
  {
    id: '11',
    text: 'Лишь многие известные личности указаны как претенденты на роль ключевых факторов. В частности, постоянный количественный рост и сфера нашей активности в #значительной степени обусловливает важность форм воздействия.',
    createdAt: new Date('2022-02-17T23:00:01'),
    author: 'Петров Петр',
    comments: [],
  },
  {
    id: '12',
    text: 'Лишь многие известные личности указаны как претенденты на роль ключевых факторов. В частности, постоянный количественный рост и сфера нашей активности в #значительной степени обусловливает важность форм воздействия.',
    createdAt: new Date('2022-02-18T23:00:01'),
    author: 'Петров Петр',
    comments: [],
  },
  {
    id: '13',
    text: 'Лишь многие известные личности указаны как претенденты на роль ключевых факторов. В частности, постоянный количественный рост и сфера нашей активности в #значительной степени обусловливает важность форм воздействия.',
    createdAt: new Date('2022-02-19T23:00:01'),
    author: 'Петров Петр',
    comments: [],
  },

  {
    id: '14',
    text: 'Лишь независимые государства являются только методом политического участия и рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок! Ключевые особенности структуры проекта формируют глобальную экономическую сеть и при этом - обнародованы. ',
    createdAt: new Date('2022-02-20T23:00:01'),
    author: 'Петров Петр',
    comments: [],
  },
  {
    id: '15',
    text: 'Лишь независимые государства являются только методом политического участия и рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок! Ключевые особенности структуры проекта формируют глобальную экономическую сеть и при этом - обнародованы. ',
    createdAt: new Date('2022-02-21T23:00:01'),
    author: 'Петров Петр',
    comments: [],
  },
  {
    id: '16',
    text: 'Лишь независимые государства являются только методом политического участия и рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок! Ключевые особенности структуры проекта формируют глобальную экономическую сеть и при этом - обнародованы. ',
    createdAt: new Date('2022-02-22T23:00:01'),
    author: 'Петров Петр',
    comments: [],
  },
  {
    id: '17',
    text: 'Лишь независимые государства являются только методом политического участия и рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок! Ключевые особенности структуры проекта формируют глобальную экономическую сеть и при этом - обнародованы. ',
    createdAt: new Date('2022-02-23T23:00:01'),
    author: 'Петров Петр',
    comments: [],
  },
  {
    id: '18',
    text: 'Лишь независимые государства являются только методом политического участия и рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок! Ключевые особенности структуры проекта формируют глобальную экономическую сеть и при этом - обнародованы. ',
    createdAt: new Date('2022-02-24T23:00:01'),
    author: 'Петров Петр',
    comments: [],
  },
  {
    id: '19',
    text: 'Лишь независимые государства являются только методом политического участия и рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок! Ключевые особенности структуры проекта формируют глобальную экономическую сеть и при этом - обнародованы. ',
    createdAt: new Date('2022-02-25T23:00:01'),
    author: 'Петров Петр',
    comments: [],
  },
  {
    id: '20',
    text: 'Этот твит должен быть удален',
    createdAt: new Date('2022-02-26T23:00:01'),
    author: 'Даша Мармыш',
    comments: [],
  },
  {
    id: '21',
    text: 'Лишь независимые государства являются только методом политического участия и рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок! Ключевые особенности структуры проекта формируют глобальную экономическую сеть и при этом - обнародованы. ',
    createdAt: new Date('2022-02-27T23:00:01'),
    author: 'Петров Петр',
    comments: [{
      id: '2101',
      text: 'Хорошо, а у тебя?',
      createdAt: new Date('2022-03-09T23:00:05'),
      author: 'Иванов Иван',
    }],
  },
];

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
function clickTwit(e) {
  const mytTarget = e.target;
  if (target.classList.contains('edit') || target.tagName == 'OBJECT') {
    alert('edit')
  }
  if (target.classList.contains('del')) {
    alert('del')
  }
}

function setCurrentUser(userNew) {
  TweetCollection.user = userNew;
  headerView.display();
}
function getFeed(skip = 0, top = 10, filterConfig = {}) {
  window.onload = function () {
    const twitList = document.querySelector("#twit_list");
    const tweetListContainer = myDocument.createElement('div');
    tweetListContainer.className='twit-list';
    tweetListContainer.id = 'tweetListContainer';
    const tweetsForView = tweets.getPage(skip,top,filterConfig);
    if (tweetsForView !== undefined) {
      tweetsForView.map((tw) => {
        const div = myDocument.createElement('div');
        div.className = 'twit-item big-shadow border ';
        div.innerHTML = `<div class="twit-header"><p class="author-name bold-text">${tw.author}</p><p class="date grey-text text-small">${getDate(tw.createdAt)}</p></div><p class="twit-text">${addHashtags(tw.text)}</p><div class="twit-footer"><p class="comm grey-text text-small">Комментарии: ${tw.comments.length}</p><div class="edit  grey-text text-small"><p> Ред.</p><object type="image/svg+xml" data="img/edit.svg"></object></div></div><div class="del"><object type="image/svg+xml" data="img/close_twit.svg" ></object></div>`;
        if (tw.author === TweetCollection.user) { div.className += 'view'; }
        tweetListContainer.appendChild(div);
      })
      twitList.appendChild(tweetListContainer);
    }
  }


}
function addTweet(textNew) {
  tweets.add(textNew);
  getFeed()

}
function editTweet(id, text)
{
  tweets.edit(id,text);
  getFeed();
}
function removeTweet(id)
{
  tweets.remove(id);
  getFeed()
}
function showTweet(id) {
  const tw = tweets.get(id);
  const tweetWindow = window.open('./twit.html');
  tweetWindow.onload = function () {
    const cont = tweetWindow.document.querySelector("#mainTweet");
    const contComment = tweetWindow.document.querySelector("#commentContainer");
    const template = tweetWindow.document.querySelector('#mainTweetTemplate');
    const templateComment = tweetWindow.document.querySelector('#commentTemplate');
    const clone = template.content.cloneNode(true);
    const authorName = clone.querySelector("#authorName");
    authorName.textContent = tw.author;
    const createDate = clone.querySelector("#createDate");
    createDate.textContent = getDate(tw.createdAt);
    const tweetText = clone.querySelector("#tweetText");
    tweetText.innerHTML = addHashtags(tw.text);
    const commentCount = clone.querySelector("#commentCount");
    commentCount.textContent = tw.comments.length;
    const commentClone = templateComment.content.cloneNode(true);
    if (tw.comments.length > 0) {
      const authorCommentName = commentClone.querySelector("#authorCommentName");
      const dateComment = commentClone.querySelector("#dateComment");
      const textComment = commentClone.querySelector("#textComment");
      tw.comments.map((c) => {
        authorCommentName.textContent = c.author;
        dateComment.textContent = getDate(c.createdAt);
        textComment.innerHTML = addHashtags(c.text);
        contComment.appendChild(commentClone);
      });
    }
    cont.appendChild(clone);
  };
}
const twee = {
  id: '201',
  text: 'Привет!#hi  #datamola  #js',
  createdAt: new Date('2022-02-09T19:25:00'),
  author: 'Петров Петр',
  comments: [],

};

const tweets = new TweetCollection(tweetsDef);
const headerView = new HeaderView('headerId');
const tweetFeedView = new TweetFeedView('twit_list');
tweetFeedView.display();
setCurrentUser('Даша Мармыш');
//showTweet('3');

//const tweetFeedView = new TweetFeedView('twit_list');

//getFeed();
//addTweet('huviytvytvy ycuyrctcuytf gyvcutfcgvytcexrxe. #hhh')
//editTweet('20', 'НОВЫЙ ТЕКСТ ТВИТА #EDIT_TWEET');
//removeTweet('20')
/*console.log(tweetsCollection.addComment('1', 'new comment'));
console.log(tweetsCollection.tweets);
console.log(tweetsCollection.get('1'));
console.log(tweetsCollection.get('50'));
console.log(tweetsCollection.getPage());
console.log(tweetsCollection.getPage(12));
console.log(tweetsCollection.getPage(10, 8));
console.log(tweetsCollection.getPage(0, 50, {
  author: '',
  dateFrom: new Date(2000, 1, 1),
  dateTo: new Date(),
  hashtags: ['js'],
  text: '',
}));//-- должен найти твит с id=4
console.log(tweetsCollection.add(' '));
console.log(tweetsCollection.edit('1', 'tttt')); //+
console.log(tweetsCollection.edit('1', 'edit tweet')); //+
console.log(tweetsCollection.edit('1', ' '));//+
console.log(tweetsCollection.remove('4')); //+
console.log(tweetsCollection.tweets);

console.log(tweetsCollection.getPage());
console.log(tweetsCollection.getPage(15));
console.log(tweetsCollection.getPage(10, 8));*/

//console.log(tweetsCollection.addAll([new Tweet('new tweet1'), new Tweet('new tweet2')]));



