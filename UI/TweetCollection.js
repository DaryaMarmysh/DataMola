import { sortByDate, setId, validateParams, checkFilterObject,checkLength } from './helpFunctions.js';
import Tweet from './Tweet.js';

/*let tweets = [
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
      text: 'Душа моя озарена неземной радостью,#js как эти чудесные весенние утра.',
      createdAt: new Date('2022-03-09T23:00:05'),
      author: 'Иванов Иван',
    }],
  },
  {
    id: '4',
    text: 'Какие #дела? #hi  #datamola  #js',
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
    text: 'Лишь независимые государства являются только методом  и финансовых предпосылок! Ключевые особенности структуры проекта формируют глобальную экономическую сеть и при этом - обнародованы. ',
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
    text: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову',
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
];*/
const filterConfigDefault = {
  author: '',
  dateFrom: new Date(2010, 1, 1),
  dateTo: new Date(2023, 1, 1),
  hashtags: [],
  text: '.',
};

function tweetsFilter(tweetsToFilter, filterParams) {
  const regAuthor = new RegExp(`${filterParams.author}`, "gi");
  let regHashtagsArray;

  if (filterParams.hashtags.length > 0) {
    regHashtagsArray = filterParams.hashtags.map(h => new RegExp(`#+[А-яa-z0-9_]*[${h}]+[А-яa-z0-9_]*`, "gi"));
  }
  else {
    regHashtagsArray = [new RegExp(`.`, "gi")];

  }
  const regTxt = new RegExp(`${filterParams.text}`, "gi");
  let filteredTweets = [];

  tweetsToFilter.forEach(element => {


    if (regAuthor.test(element.author) &&
      element.createdAt >= filterParams.dateFrom &&
      element.createdAt <= filterParams.dateTo &&
      regHashtagsArray.every(r => r.test(element.text)) &&
      regTxt.test(element.text)) {

      filteredTweets.push(element);
    }
  });

  return filteredTweets;
}
class TweetCollection {
  static user = 'Петров Петр';
  constructor(twts) {
    this._tweets = twts;
  }
  get tweets() {
    return this._tweets;
  }
  set tweets(newTweets) {
    this._tweets = newTweets;
  }
  static getPage(skip, top, filterConfig) {
    let filterSearch = {};
    let skipDefault = 0;
    let topDefault = 10;
    /////!!!!!!!!!
    switch (arguments.length) {
      case 0:
        Object.assign(filterSearch, filterConfigDefault);
        break;
      case 1:
        if (typeof skip === 'number') {
          skipDefault = skip;
          Object.assign(filterSearch, filterConfigDefault);
        } else if (typeof skip === 'object') {
          Object.assign(filterSearch, checkFilterObject(skip));
        } else (console.log('error/input params getTweets'));
        break;
      case 2:
        if (typeof skip === 'number' && typeof top === 'number') {
          skipDefault = skip;
          topDefault = top;
          Object.assign(filterSearch, filterConfigDefault);
        } else if (typeof skip === 'number' && typeof top === 'object') {
          skipDefault = skip;
          Object.assign(filterSearch, checkFilterObject(top));
        } else (console.log('error/input params getTweets'));
        break;
      case 3:
        if (typeof skip === 'number' && typeof top === 'number' && typeof filterConfig === 'object') {
          skipDefault = skip;
          topDefault = top;
          Object.assign(filterSearch, checkFilterObject(filterConfig));
        } else { console.log('error/input params getTweets'); }
        break;

      default:
        console.log('error/input params getTweets'); break;
    }
    const viewTweets = sortByDate(tweetsFilter(tweets, filterSearch)).splice(skipDefault, topDefault);
    return viewTweets;
  }

  get(id) {
    const tw = this._tweets.find((t) => t.id === id);
    return tw !== undefined ? tw : false;
  }

  add(newTwitText = '') {
    if (newTwitText.length > 0) {
      const newTweet = new Tweet(newTwitText);
      if (Tweet.validate(newTweet)) {
        this._tweets.push(newTweet);
        return true;
      }
      return false;
    }
    return false;
  }
  /////// сохранить ид
  edit(id, text) {
    const editTweet = this.get(id);
    if (editTweet && editTweet.author === TweetCollection.user && checkLength(text)) {
      editTweet.text = text;
        return true;
      }
      return false;
    }
  
  remove(id) {
    const removeTweet = this.get(id);
    if (removeTweet && removeTweet.author === TweetCollection.user) {
      const index = this._tweets.findIndex(t => t === removeTweet);
      if (index !== -1) {
        this._tweets.splice(index, 1);
        if (this._tweets.findIndex(t => t.id === id) === -1) {
          return true;
        } return false;
      } return false;
    }return false;
  }
  addComment(id,text) {
    
    const twNewComm = new Comment(text);
    const tweetToAddComm=this.get(id);
    if (Comment.validate(twNewComm)) {
      tweetToAddComm.comments.push(twNewComm);
      return true;
    }
    return false;
  }

}
export default TweetCollection;
