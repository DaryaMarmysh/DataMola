/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
import UserCollection from './UserCollection.js';

class LogView {
  constructor(containerId) {
    this.main = document.querySelector(`#${containerId}`);
  }

  showError(inp, inpError) {
    if (inp.validity.valueMissing) {
      inpError.textContent = 'Поле должно быть заполнено.'; inp.classList.add('errorField');
    } else if (inp.validity.tooShort) {
      inpError.textContent = 'Поле должно содержать не менее 3 символов.';
    } else if (inp.validity.tooLong) {
      inpError.textContent = 'Поле должно содержать не более 10 символов.';
    } else if (inp.validity.patternMismatch) {
      inpError.textContent = 'Поле может содержать только буквы, цифры и символы подчёркивания.';
    } else {
      inpError.textContent = ' ';
    }
  }

  display(tweetController) {
    const loginPageTemplate = document.getElementById('loginPage');
    const clone = loginPageTemplate.content.cloneNode(true);
    this.main.appendChild(clone);
    const formLogin = document.getElementById('logForm');
    const login = document.getElementById('loginInput');
    const password = document.getElementById('passwordInput');
    const loginError = document.getElementById('loginError');
    const passwordError = document.getElementById('passwordError');
    formLogin.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!login.validity.valid || !password.validity.valid) {
        this.showError(login, loginError);
        this.showError(password, passwordError);
      } else {
        const users = new UserCollection();
        const user = users.findUser(login.value);
        if (user && user.password === password.value) {
          tweetController.setCurrentUser(user.name);
          tweetController.getFeed(tweetController);
         
          // const tweetList = document.getElementById('twit_list');
        } else {
          passwordError.textContent = 'Неверный логин или пароль';
          loginError.textContent = 'Неверный логин или пароль';
        }
      }
    });
  }
}
export default LogView;