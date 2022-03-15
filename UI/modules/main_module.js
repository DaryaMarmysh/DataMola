//import tweets from '../array.js';
let tweets = [
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
        text: 'Душа моя озарена неземной радостью, как эти чудесные весенние утра, #которыми я наслаждаюсь от всего сердца.',
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
        text: 'Душа моя озарена неземной радостью, как эти чудесные весенние утра, #которыми я наслаждаюсь от всего сердца.',
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
    }

];
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 10);
const filterConfig_default =
{
    author: '',
    dateFrom: new Date(2010, 1, 1),
    dateTo: tomorrow,
    hashtags: [],
    text: '.'
}
const filterConfig_with_params =
{
    author: 'Даша',
    dateFrom: new Date(2000, 1, 1),
    dateTo: (new Date()).setDate((new Date()).getDate() + 1),
    hashtags: ['js', 'hi'],
    text: 'какие'
}
const my_interface = {
    user: 'Петров Петр',
    getTweets: function (skip, top, filterConfig) {

        let filterSearch = {};
        let skip_default = 0;
        let top_default = 10;

        switch (arguments.length) {
            case 0:
                Object.assign(filterSearch, filterConfig_default);
                break;
            case 1:
                if (typeof arguments[0] === 'number') {
                    skip_default = skip;
                    Object.assign(filterSearch, filterConfig_default);
                }
                else if (typeof arguments[0] === 'object') {

                    Object.assign(filterSearch, checkFilterObject(skip))
                }
                else (
                    console.log('error/input params getTweets')
                )
                break;
            case 2:
                if (typeof arguments[0] === 'number' && typeof arguments[1] === 'number') {

                    skip_default = skip;
                    top_default = top;
                    Object.assign(filterSearch, filterConfig_default);

                }
                else if (typeof arguments[0] === 'number' && typeof arguments[1] === 'object') {

                    skip_default = skip;
                    Object.assign(filterSearch, checkFilterObject(top));

                }
                else (
                    console.log('error/input params getTweets')
                )
                break;
            case 3:
                if (typeof arguments[0] === 'number' && typeof arguments[1] === 'number' && typeof arguments[2] === 'object') {
                    skip_default = skip;
                    top_default = top;

                    Object.assign(filterSearch, checkFilterObject(filterConfig));

                }
                else { console.log('error/input params getTweets'); }
                break;

            default:
                console.log('error/input params getTweets'); break;
        }
        const view_tweets = sortByDate(tweets_filter(tweets, filterSearch)).splice(skip_default, top_default);
        return view_tweets;
    },
    getTweet: function (id) {
        let tw = tweets.find(t => t.id == id);
        return tw != undefined ? tw : 'Id not found';
    },
    validateTweet: function (tw) {
        if (validateParams(tw.id, tw.text, tw.createdAt, tw.author)) {
            if (validateType(tw.comments, 'array')) {
                return true;
            }
        }
        else return false;
    },
    editTweet: function (id, text) {
        //const new_id=setId();
        tweets.map(t => {
            if (t.id == id && t.author == user) {
                if (checkLength(text.length, 280)) {
                    t.text = text;

                    return true;
                }
                else
                    return false;
            }
            else {
                return false;
            }
        })
        return tweets.filter(t => t.id = id)[0].text === text;


    },
    addTweet: function (new_twit_text = '') {
        if (new_twit_text.length > 0) {
            const new_id = setId();
            const new_twit = {
                id: new_id,
                text: new_twit_text,
                createdAt: new Date(),
                author: user,
                comments: [],
            }
            if (validateTweet(new_twit)) {
                tweets.push(new_twit);
                return true;
            }
            else return false;
        }
        else return false;
    },

    removeTweet: function (id) {
        const index = tweets.findIndex(t => t.id === id.toString());
        if (index !== -1) {
            tweets.splice(index, 1);
            if (tweets.findIndex(t => t.id === id) === -1) return true;
        }
        else return false;

    },
    validateComment: function (comm) {
        if (validateParams(comm.id, comm.text, comm.createdAt, comm.author)) return true;
        else return false;
    },
    addComment: function (id, text) {
        const new_id = setId();
        const tw_new_comm = tweets.filter(tw => {
            if (tw.id === id && checkLength(text.length, 280)) {
                tw.comments.push(
                    {
                        id: new_id,
                        text: text,
                        createdAt: new Date(),
                        author: user
                    }
                )
                return tw;
            }

        })
        if (tw_new_comm.length > 0) { if (tw_new_comm[0].id === id && tw_new_comm[0].comments[tw_new_comm[0].comments.length - 1].text == text) return true; }
        else return false;

    },
    changeUser: function (user) {
        if (user != undefined && user != '') {
            my_interface.user = user;

        }

    }
}
//    /([#])([\w*|А-я]*)/ ([#])*да* //(?:^|\s)(?:#)([a-zA-ZА-я\w]+) (?:#)\w*(.)[A-zА-я_]*
function tweets_filter(tweetsToFilter, filterParams) {
    const reg_author = new RegExp(`${filterParams.author}`, "gi");
    let reg_hashtags_array;

    if (filterParams.hashtags.length > 0) {
        reg_hashtags_array = filterParams.hashtags.map(h => new RegExp(`#+[А-яa-z0-9_]*[${h}]+[А-яa-z0-9_]*`, "gi"));
    }
    else {
        reg_hashtags_array = [new RegExp(`.`, "gi")];

    }
    const reg_txt = new RegExp(`${filterParams.text}`, "gi");
    let filtered_tweets = [];

    tweetsToFilter.forEach(element => {
       

        if (reg_author.test(element.author) &&
            element.createdAt >= filterParams.dateFrom &&
            element.createdAt <= filterParams.dateTo &&
            reg_hashtags_array.every(r => { return r.test(element.text) }) &&
            reg_txt.test(element.text)) {

            filtered_tweets.push(element);
        }
    });

    return filtered_tweets;

}
function sortByDate(arr) {
    return arr.sort((a, b) => { return b.createdAt - a.createdAt });
}
function checkLength(l, max_l) {
    return l < max_l ? l : false;
}
function validateType(obj, type) {
    if (obj !== undefined) {
        if (type === 'date') {
            return !isNaN(obj.getTime());
        }
        if (type === 'array') {
            return Array.isArray(obj);
        }
        return typeof obj == type;
    }

    else { console.log('error in validateType ' + obj + ' ' + type); return false; }
}
function validateParams(id, text, createdAt, author) {
    if (validateType(id, 'string') && (tweets.filter(twit => twit.id == id)).length == 0 &&
        tweets.filter(tw => tw.comments.filter(comm => comm.id == id).length == 0).length == tweets.length &&
        validateType(text, 'string') && text.length <= 280 && text.length > 0 &&
        validateType(createdAt, 'date') &&
        validateType(author, 'string') && author.length > 0
    ) {

        return true;
    }
    else return false;

}
function setId() {
    return Date.now().toString();
}
function checkFilterObject(obj) {
    Object.keys(filterConfig_default).map(prop => {

        if (obj[prop] === undefined) { obj[prop] = filterConfig_default[prop] }
    })
    return obj;
}
export const getTweets = my_interface.getTweets;
export const getTweet = my_interface.getTweet;
export const validateTweet = my_interface.validateTweet;
export const editTweet = my_interface.editTweet;
export const addTweet = my_interface.addTweet
export const removeTweet = my_interface.removeTweet;
export const changeUser = my_interface.changeUser;
export const validateComment = my_interface.validateComment;
export const addComment = my_interface.addComment;
export const user = my_interface.user;


//console.log(getTweets()) //+ 
//console.log(getTweets(0,25)) //+
//console.log(getTweets(10,50)) //+
//console.log(getTweets(5,6)) //+
//console.log(getTweets(50,50)) //+
//console.log(getTweets(0,10,filterConfig_with_params)) //+
//console.log(getTweets(0,filterConfig_with_params)) //+
//console.log(getTweets(0,filterConfig_default)) //+
//console.log(getTweets(filterConfig_with_params)) //+
//console.log(getTweets(0,'t'))//+-
//console.log(getTweets(0,10, {hashtags: ['hi']})) //  +
//console.log(getTweets(0, 10, { hashtags: [] })) // +
//console.log(getTweets(0, 10, { hashtags: ['js','hi'] })) //+

//console.log(getTweet(50))//+
//console.log(getTweet(6))//+
//console.log(getTweet('l'))//+

/*console.log(validateTweet({
    id: '378',
    text: 'Душа моя озарена неземной радостью, как эти чудесные весенние утра, #которыми я наслаждаюсь от всего сердца.',
    createdAt: new Date('2022-03-08T23:00:01'),
    author: 'Петров Петр',
    comments: [],
}));
*/

//console.log(addTweet('NEW TWIT')); //+
//console.log(addTweet('')); //+
//console.log(addTweet()); //+


//console.log(editTweet('1', "NEW TEXT")) //+;
//console.log(editTweet('1', "")) //+;
//console.log(editTweet('100', "NEW TEXT")) //+;
//console.log(tweets);

//console.log(getTweet(4),removeTweet(4),getTweet(4)) //+
//console.log(getTweet(400),removeTweet(400),getTweet(400)) //+
//console.log(my_interface.user);
//changeUser('NEW USER');

/*console.log(validateComment({
    id: '981',
    text: 'Mew comment',
    createdAt: new Date('2022-03-09T23:00:05'),
    author: 'Иванов Иван',
}));
console.log(validateComment({
    id: '201',
    text: 'Mew comment',
    createdAt: new Date('2022-03-09T23:00:05'),
    author: 'Иванов Иван',
})); *////+
//console.log(addComment('2','this is new comment')) //+
//console.log(addComment('28954','this is new comment')) //+
//console.log(addComment('2','')) //+



