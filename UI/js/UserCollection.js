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
    this.users = [
      {
        name: 'Даша Мармыш',
        password: '111',

      },
      {
        name: 'Петров Петр',
        password: '222',
      },
    ];
  }

  add(newUser) {
    if (newUser !== undefined) {
      if (newUser.name !== undefined && newUser.name.length > 0) {
        if (newUser.password !== undefined && newUser.password.length > 0) {
          if (!this.findUser(newUser.name)) {
            this.users.push(new User(newUser.name, newUser.password));
          }
        }
      }
    }
  }

  findUser(log) {
    const findUser = this.users.find((u) => u.name === log);
    return findUser === -1 ? false : findUser;
  }
}
export default UserCollection;