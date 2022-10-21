/* eslint-disable prefer-destructuring */
var request = new XMLHttpRequest();
request.open('GET','https://jslabapi.datamola.com');
request.responseType = 'text';

request.onload = function() {
  poemDisplay.textContent = request.response;
};

request.send();