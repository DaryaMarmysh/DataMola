/* eslint-disable no-lonely-if */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
import UserCollection from './UserCollection.js';

class RegView {
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

  bindControllerTweets(addUserFun, lodinPageLoad) {
    const loginPageLoadButton = document.getElementById('loginPageLoadButton');
    loginPageLoadButton.addEventListener('click', () => lodinPageLoad());
    const formReg = document.getElementById('regForm');
    const login = document.getElementById('loginInput');
    const password = document.getElementById('passwordInput');
    const passwordConfirm = document.getElementById('passwordInputConfirm');
    const loginError = document.getElementById('loginError');
    const passwordError = document.getElementById('passwordError');
    const passwordErrorConfirm = document.getElementById('passwordErrorConfirm');
    formReg.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!login.validity.valid || !password.validity.valid) {
        this.showError(login, loginError);
        this.showError(password, passwordError);
      } else {
        if (passwordConfirm.value === password.value && login.value.trim() !== '') {
          addUserFun(login.value, password.value);
        } else {
          passwordError.textContent = 'Пороли должны совпадать.';
          passwordErrorConfirm.textContent = 'Пороли должны совпадать.';
        }
      }
    });
  }

  display() {
    const oldChild = document.querySelector('#pageContainer');
    const regPageTemplate = document.getElementById('regPageTemplate');
    const clone = regPageTemplate.content.cloneNode(true);
    if (oldChild) { this.main.replaceChild(clone, oldChild); }
    else {
      this.main.appendChild(clone);
    }
  }
}
export default RegView;