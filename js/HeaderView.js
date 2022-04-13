import TweetCollection from './TweetCollection.js';

class HeaderView {
  constructor(containerId) {
    this.myHeader = document.querySelector(`#${containerId}`);
    this.user = this.myHeader.querySelector('#currentUser');
    this.button = this.myHeader.querySelector('#headerButton');
  }

  bindControllerTweets(loginPageLoad, getFeedFun, setUserFun) {
    const headerBut = document.getElementById('headerButton');
    headerBut.addEventListener('click', () => {
      loginPageLoad();
      if (this.username() !== 'Гость') {
        setUserFun('Гость');
        getFeedFun();
      }
    });
  };

  display() {
    const username = this.username();
    this.user.innerText = username;
    if (username === 'Гость') {
      this.button.innerText = 'Войти';
    } else if (username === undefined) {
      this.button.innerText = 'Войти';
      this.user.innerText = 'Гость';
    } else {
      this.button.innerText = 'Выйти';
    }
  }
}

export default HeaderView;
