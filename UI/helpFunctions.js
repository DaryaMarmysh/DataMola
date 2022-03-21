const filterConfigDefault = {
  author: '',
  dateFrom: new Date(2010, 1, 1),
  dateTo: new Date() + 10,
  hashtags: [],
  text: '.',
};
function sortByDate(arr) {
  return arr.sort((a, b) => b.createdAt - a.createdAt);
}
function checkFilterObject(obj) {
  Object.keys(filterConfigDefault).forEach((prop) => {
    if (obj[prop] === undefined) {
      obj[prop] = filterConfigDefault[prop];
    }
  });
  return obj;
}
function setId() {
  return Date.now().toString();
}
function validateType(obj, type) {
  if (obj !== undefined) {
    if (type === 'date') {
      return !Number.isNaN(obj.getTime());
    }
    if (type === 'array') {
      return Array.isArray(obj);
    }
    return typeof obj === type;
  }
  console.log(`error in validateType ${obj} ${type}`);
  return false;
}
function validateParams(id, text, createdAt, author) {
  if (validateType(id, 'string')
  && validateType(text, 'string')
  && text.length <= 280 && text.length > 0
  && validateType(createdAt, 'date')
  && validateType(author, 'string') && author.length > 0) {
    return true;
  }
  return false;
}
export {
  sortByDate,
  checkFilterObject,
  setId,
  validateParams,
};
