import TweetCollection from './TweetCollection.js';

class HeaderView {
  
  constructor(containerId) {
    this.myHeader = document.querySelector(`#${containerId}`);
    
  }

   display() {
    const user =  this.myHeader.querySelector('#currentUser');
    const button =  this.myHeader.querySelector('#headerButton');
    user.innerText = TweetCollection.user;
    button.innerText="Выйти"
  }
}
export default HeaderView;
