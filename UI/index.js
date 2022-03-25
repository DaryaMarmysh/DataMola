import TweetCollection from './TweetCollection.js';
import Tweet from './Tweet.js';

const tweets = [
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
    text: 'Лишь независимые государства являются только методом политического участия и рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок! Ключевые особенности структуры проекта формируют глобальную экономическую сеть и при этом - обнародованы. ',
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
/*
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
  //const regexp = /([#])\w*[А-я]*'/g;
  return text.replace(regexp, replacer);
}
 function clickTwit(e) {
  const mytTarget = e.target;
   if (target.classList.contains('edit')|| target.tagName=='OBJECT') {
      alert('edit')
  }
  if (target.classList.contains('del')) {
      alert('del')
  }
} 
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
}; */

const twee = {
  id: '201',
  text: 'Привет!#hi  #datamola  #js',
  createdAt: new Date('2022-02-09T19:25:00'),
  author: 'Петров Петр',
  comments: [],

};
const tweetsCollection = new TweetCollection(tweets);

TweetCollection.user='Петров Петр';

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
console.log(tweetsCollection.getPage(0,10, {
  
  hashtags: ['js'],
 
}));

//console.log(tweetsCollection.addAll([new Tweet('new tweet1'), new Tweet('new tweet2')]));
console.log(tweetsCollection.remove('4'));
console.log(tweetsCollection.tweets);

