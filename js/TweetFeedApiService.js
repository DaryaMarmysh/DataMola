/* eslint-disable prefer-object-spread */
/* eslint-disable quote-props */
/* eslint-disable no-return-assign */
/* eslint-disable arrow-body-style */
/* eslint-disable brace-style */
class TweetFeedApiService {
  constructor(url) {
    this.URL = url;
    this.token = '';
  }

  async getTweetsFromServer(skip, top, filterConfig) {
    const url = new URL(`${this.URL}/tweet`);
    const params = Object.assign({ from: skip, count: top }, filterConfig);
    url.search = new URLSearchParams(params).toString();
    console.log(url)
    const response = await fetch(url)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return resp.json();
      })
      .catch((error) => console.log(`Could not fetch verse: ${error}`));
    return await response;
  }

  async loginUser(login, password) {
    const response = await fetch(`${this.URL}/login`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 'login': login, 'password': password }),
    });
    return await response.json();
  }

  async registerUser(user) {
    await fetch(`${this.URL}/registration`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

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
      body: JSON.stringify({ 'text': newTweettext }),
    });
  }

  async deleteTweet(id) {
    await fetch(`${this.URL}/tweet/${id}`, {
      method: 'DELETE',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }

  async editTweet(id, editText) {
    await fetch(`${this.URL}/tweet/${id}`, {
      method: 'PUT',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      },
      body: JSON.stringify({ "text": editText }),
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
