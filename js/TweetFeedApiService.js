/* eslint-disable no-return-assign */
/* eslint-disable arrow-body-style */
/* eslint-disable brace-style */
class TweetFeedApiService {
  constructor(url) {
    this.URL = url;
    //this.getTweetsFromServer();
    this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ItCU0LDRiNCwINCc0LDRgNC80YvRiCIsImlhdCI6MTY0OTc2NzIyMiwiZXhwIjoxNjQ5NzgxNjIyfQ.rGkYQQQi2cCkC-32QmgZMDb7LTkqVhYtAqE7tW3zpOU';
  }

  async getTweetsFromServer() {
    const response = await fetch(`${this.URL}/tweet`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return resp.json();
      })
      .catch((error) => console.log(`Could not fetch verse: ${error}`));
   return await response;
  }

  async loginUser(user) {
    const response = await fetch(`${this.URL}/login`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  }

  setLogintUser() {
    this.loginUser({ 'login': 'Даша Мармыш', 'password': '111' }).then((data) => { this.token = data.token })
  }

  async registerUser(user) {
    const response = await fetch(`${this.URL}/registration`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  }

  setRegisterUser() {
    this.registerUser({ 'login': 'Даша Мармыш', 'password': '111' }).then((data) => console.log(data))
  }

  async addNewTweet(newTweettext) {
    await fetch(`${this.URL}/tweet`, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      },
      body: JSON.stringify({ "text": newTweettext }),
    });
  }

  async deleteTweet(id) {
    await fetch(`${this.URL}/tweet${id}`, {
      method: 'DELETE',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }

  async editTweet(id) {
    await fetch(`${this.URL}/tweet${id}`, {
      method: 'PUT',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }

  async addNewComment(id, newCommentText) {
    await fetch(`${this.URL}/tweet/${id}/comment`, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      },
      body: JSON.stringify({ "text": newCommentText }),
    });
  }

  async deleteComment(idTweet, idComment) {
    await fetch(`${this.URL}/tweet/${idTweet}/comment/${idComment}`, {
      method: 'DELETE',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }
}
export default TweetFeedApiService;
