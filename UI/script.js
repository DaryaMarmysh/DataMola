/* eslint-disable spaced-comment */
/* eslint no-use-before-define: 0 */
/*eslint func-names: 0*/
/*eslint no-undef:0*/
/* eslint import/extensions: 0*/
import TweetsController from './js/TweetsController.js';

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
    },
    {
      id: '303',
      text: 'текст коммента #haha',
      createdAt: new Date('2022-03-09T23:00:05'),
      author: 'Иванов Иван',
    },
    {
      id: '304',
      text: 'текст коммента #hahahaha',
      createdAt: new Date('2022-03-09T23:00:05'),
      author: 'Иванов Иван',
    },
    {
      id: '305',
      text: 'текст коммента #haha',
      createdAt: new Date('2022-03-09T23:00:05'),
      author: 'Иванов Иван',
    },
    {
      id: '306',
      text: 'текст коммента #hahahaha',
      createdAt: new Date('2022-03-09T23:00:05'),
      author: 'Иванов Иван',
    },
    {
      id: '307',
      text: 'текст коммента #haha',
      createdAt: new Date('2022-03-09T23:00:05'),
      author: 'Иванов Иван',
    },
    {
      id: '308',
      text: 'текст коммента #hahahaha',
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
    author: 'Иванов Иван',
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
    author: 'Иванов Иван',
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

const filter = document.getElementsByClassName('filter')[0];
function myFunction() {
  alert('dsds')
  filter.classList.toggle('close');
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


//addTweet('huviytvytvy ycuyrctcuytf gyvcutfcgvytcexrxe. #hhh');
///editTweet('20', 'НОВЫЙ ТЕКСТ ТВИТА #EDIT_TWEET');
//removeTweet('20');
//showTweet('3');
//закинуть все твиты через конструктор твита и конструктор уоммента
//через addall stringify массив в строчку и сохранить в local storage
//проверка в локал стораже

const tweetController = new TweetsController(tweetsDef, 'headerId', 'twit_list', 'main', 'filter');
tweetController.setCurrentUser('Даша Мармыш');
tweetController.getFeed();
const tweetList = document.getElementById('tweetListContainer');
const addNewTweetButton = document.querySelector('#addNewTweet');
addNewTweetButton.addEventListener('click', () => {
  const textarea = document.getElementById('textareaNewTweet');
  tweetController.addTweet(textarea.value);
})
tweetList.onclick = function (event) {
  let target = event.target;
  if (target.classList.contains('del')) {
    tweetController.removeTweet(target.closest('.twit-item').dataset.id);
  } else if (target.classList.contains('edit')) {
    const editTweet = target.closest('.twit-item');
    const textarea = document.createElement('textarea');
    const paragText = editTweet.querySelector('#twitText');
    const but = document.createElement('button');
    but.innerHTML = 'Сохранить';
    but.onclick = function () {
      tweetController.editTweet(editTweet.dataset.id, textarea.value);
    }
    editTweet.replaceChild(textarea, paragText);
    editTweet.querySelector('#tweetFooter').replaceChild(but, editTweet.querySelector('#editDiv'));
  } else {
    const showTweet = target.closest('.twit-item');
    tweetController.showTweet(showTweet.dataset.id);
  }
}