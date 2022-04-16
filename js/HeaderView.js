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
      if (this.currentUser() !== 'Гость' && this.currentUser() !== null) {
        setUserFun('Гость');
        this.user.innerText='Гость';
        getFeedFun();
      }
    });
  };

  display() {
    const username = this.currentUser();
    //this.user.innerText = username;
    if (username === 'Гость' || username === null) {
      this.button.innerText = 'Войти';
      //this.user.innerText='';

    }/* else if (username === undefined) {
      this.button.innerText = 'Войти';
      this.user.innerText = 'Гость';
    }*/ else {
      this.user.innerText = username;
      this.button.innerText = 'Выйти';
    }
  }
}

export default HeaderView;
