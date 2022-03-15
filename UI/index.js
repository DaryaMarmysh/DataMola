
import {getTweets,getTweet,validateTweet,editTweet,user} from './modules/main_module.js'

 
window.onload = function () {
    let current_user=document.getElementsByClassName('name')[0];
    current_user.innerHTML=user;
    let list = document.getElementsByClassName('twit-list')[0];
    getTweets().forEach(twit => {
        var div = document.createElement('div');
        div.className = "twit-item big-shadow border ";
        div.innerHTML = '<div class="twit-header"><p class="author-name bold-text">' + twit.author + '</p><p class="date grey-text text-small">' + getDate(twit.createdAt) + '</p></div><p class="twit-text">' + addHashtags(twit.text) + '</p><div class="twit-footer"><p class="comm grey-text text-small">Комментарии: ' + commentsCount(twit.comments) + '</p><div class="edit  grey-text text-small"><p> Ред.</p><object type="image/svg+xml" data="img/edit.svg"></object></div></div><div class="del"><object type="image/svg+xml" data="img/close_twit.svg" ></object></div>';
        twit.author == user ? div.className += "view" : false;
        div.onclick = clickTwit;
        list.appendChild(div)
    })

};
function getDate(date) {
    var month = [
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
    
    return date.getDate() + ' ' + month[date.getMonth() - 1] + ' ' + date.getFullYear() + ' ' + date.toLocaleTimeString().substring(0, 5);
}
function addHashtags(text) {
    let span = document.createElement('span');
    span.className = "hash";
    let regexp = /([#])\w*[А-я]*/g;
    return text.replace(regexp, replacer)
}
function replacer(match) {

    return '<span class="hash">' + match + '</span>';
}
function commentsCount(arr) {
    return arr.length;
}
function clickTwit(e) {
    let target = e.target;

    /* if (target.classList.contains('edit')|| target.tagName=='OBJECT') {
        alert('edit')
    }
    if (target.classList.contains('del')) {
        alert('del')
    } */

    alert(target)
}


