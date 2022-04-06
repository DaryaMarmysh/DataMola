import TweetCollection from './TweetCollection.js';

class HeaderView {

  constructor(containerId) {
    this.myHeader = document.querySelector(`#${containerId}`);
    this.user = this.myHeader.querySelector('#currentUser');
    this.button = this.myHeader.querySelector('#headerButton');
  }
  exit() {
    this.button.innerText = "Выйти";

  };

  display() {
    this.user.innerText = this.getUser();
    this.button.innerText = "Выйти";
  }

}



export default HeaderView;
