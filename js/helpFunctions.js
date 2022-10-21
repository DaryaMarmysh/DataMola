/* eslint no-restricted-syntax: ["error", "FunctionExpression", "WithStatement", "BinaryExpression[operator='in']"] */
function setId() {
  return Date.now().toString();
}
function validateId(id, set) {
  if (id !== undefined && typeof id === 'string') {
    for (const value of set) {
      if (value.comments.length > 0) {
        if (value.comments.findIndex((c) => c.id === id) !== -1) {
          return false;
        }
      }
      if (value.id === id) { return false; }
    }
    return true;
  }
  return false;
}
function validateText(text) {
  if (text !== undefined && text.trim() !== '') {
    return text.length < 280;
  }
  return false;
}
function validateDate(date) {
  if (date !== undefined) { return !Number.isNaN(date.getTime()); }
  return false;
}
function validateAuthor(name) {
  if (name !== undefined) {
    return name.length > 0;
  }
  return false;
}
export {
  setId,
  validateId,
  validateText,
  validateDate,
  validateAuthor,
};
