/* eslint-disable spaced-comment */
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

  async fetchMethod(fetchObj) {
    const {
      url: fetchUrl = '/tweet',
      method: fetchMethod = 'GET',
      params: fetchParams = undefined,
      body: fetchBody = JSON.stringify(''),
      headers: fetchHeaders = {
        'Content-Type': 'application/json',
      },
    } = fetchObj;
    console.log(fetchObj);
    const url = new URL(`${this.URL}/${fetchUrl}`);
    if (fetchParams) {
      url.search = new URLSearchParams(fetchParams).toString();
    }
    const response = await fetch(fetchUrl, {
      method: fetchMethod,
      mode: 'cors',
      cache: 'no-cache',
      headers: fetchHeaders,
      body: fetchBody,
    })
      .then((res) => {
        if (res.ok) {
          return res;
        } return Promise.reject(res);
      })
      .catch((error) => this.loadErrorPage(error.status));
    return response.json();
  }

  async getAllTweets() {
    const url = new URL(`${this.URL}/tweet`);
    const params = { from: 0, count: Number.MAX_SAFE_INTEGER };
    url.search = new URLSearchParams(params).toString();
    const resp = await fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } return Promise.reject(response);
      })
      .catch((error) => this.loadErrorPage(error.status));
    return resp;
  }

  async getTweetsFromServer(skip, top, filterConfig) {
    const url = new URL(`${this.URL}/tweet`);
    const params = { from: skip, count: top };
    Object.keys(filterConfig).forEach((key) => {
      if (filterConfig[key] !== null) { params[key] = filterConfig[key]; }
    });
    url.search = new URLSearchParams(params).toString();
    const resp = await fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } return Promise.reject(response);
      })
      .catch((error) => this.loadErrorPage(error.status));
    return resp;
  }

  loginUser(login, password) {
    /*const response = await fetch(`${this.URL}/login`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 'login': login, 'password': password }),
    })
      .then((res) => {
        if (res.ok) {
          return res;
        } return Promise.reject(res);
      })
      .catch((error) => this.loadErrorPage(error.status));
    return response.json(); */
    return this.fetchMethod({
      method: 'POST',
      url: `${this.URL}/login`,
      body: JSON.stringify({ 'login': login, 'password': password }),
    });
  }

  async registerUser(login, password) {///не работает
    /*await fetch(`${this.URL}/registration`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 'login': login, 'password': password }),
    })
      .then((res) => {
        if (res.ok) {
          return res;
        } return Promise.reject(res);
      })
      .catch((error) => this.loadErrorPage(error.status));*/
    return this.fetchMethod({
      method: 'POST',
      url: `${this.URL}/registration`,
      body: JSON.stringify({ 'login': login, 'password': password }),
    });
  }

  addNewTweet(newTweettext) {
   /* const response = await fetch(`${this.URL}/tweet`, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      },
      body: JSON.stringify({ 'text': newTweettext }),
    })
      .then((res) => {
        if (res.ok) {
          return res;
        } return Promise.reject(res);
      })
      .catch((error) => this.loadErrorPage(error.status));
    return response;*/
    return this.fetchMethod({
      method: 'POST',
      url: `${this.URL}/tweet`,
      body: JSON.stringify({ 'text': newTweettext }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }

  async deleteTweet(id) {
    const response = await fetch(`${this.URL}/tweet/${id}`, {
      method: 'DELETE',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res;
        } return Promise.reject(res);
      })
      .catch((error) => this.loadErrorPage(error.status));
    return response;
    /*return this.fetchMethod({
      method: 'DELETE',
      url: `${this.URL}/tweet/${id}`,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      },
    });*/
  }

  async editTweet(id, editText) {
    const response = await fetch(`${this.URL}/tweet/${id}`, {
      method: 'PUT',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      },
      body: JSON.stringify({ 'text': editText }),
    })
      .then((res) => {
        if (res.ok) {
          return res;
        } return Promise.reject(res);
      })
      .catch((error) => this.loadErrorPage(error.status));
    return response;
  }

  async addNewComment(id, newCommentText) {
    const response = await fetch(`${this.URL}/tweet/${id}/comment`, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      },
      body: JSON.stringify({ 'text': newCommentText }),
    })
      .then((res) => {
        if (res.ok) {
          return res;
        } return Promise.reject(res);
      })
      .catch((error) => this.loadErrorPage(error.status));
    return response;
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
