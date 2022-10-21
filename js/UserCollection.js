/* eslint-disable class-methods-use-this */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable max-classes-per-file */
class User {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
}
class UserCollection {
  constructor() {
    this.users=[];
    this.restore();
    //localStorage.setItem('currentUser','');
  }

  add(newUserName, newUserPassword) {
    if (newUserName !== undefined && newUserName.length > 0) {
      if (newUserPassword !== undefined && newUserPassword.length > 0) {
        if (!this.findUser(newUserName)) {
          const newUser = new User(newUserName, newUserPassword)
          this.users.push(newUser);
          return newUser;
        }
      }
    }
    return false;
  }

  findUser(log) {
    const findUser = this.users.find((u) => u.name === log);
    return findUser === -1 ? false : findUser;
  }

  restore() {
    this.users = JSON.parse(localStorage.getItem('users'));

  }

  save() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
export default UserCollection;