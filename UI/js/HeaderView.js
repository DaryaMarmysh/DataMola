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
      if (this.username() === 'Гость') {
        loginPageLoad();
        this.button.innerText = 'Выйти';
      } else {
        setUserFun('Гость');
        getFeedFun();
        this.button.innerText = 'Войти';
      }
    });
  };
  
  display() {
    this.user.innerText = this.username();
  }

}

export default HeaderView;
