/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
/* eslint-disable spaced-comment */
/* eslint no-use-before-define: 0 */
/*eslint func-names: 0*/
/*eslint no-undef:0*/
/* eslint import/extensions: 0*/
import TweetsController from './js/TweetsController.js';
import TweetFeedApiService from './js/TweetFeedApiService.js';

const server = new TweetFeedApiService('https://jslabapi.datamola.com');
const tweetController = new TweetsController('headerId', 'main', 'main', 'filter', 'main', 'main', server, 'main');
tweetController.bindFunction();

//server.setLogintUser();
//server.addNewTweet('new tweet from vs code')
//console.log(server.token);
//server.setRegisterUser();


//закинуть все твиты через конструктор твита и конструктор уоммента
//через addall stringify массив в строчку и сохранить в local storage
//проверка в локал стораже


