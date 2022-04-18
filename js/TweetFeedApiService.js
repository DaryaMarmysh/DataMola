/* eslint-disable lines-between-class-members */
/* eslint-disable spaced-comment */
/* eslint-disable prefer-object-spread */
/* eslint-disable quote-props */
/* eslint-disable no-return-assign */
/* eslint-disable arrow-body-style */
/* eslint-disable linebreak-style */

class TweetFeedApiService {
  constructor(url) {
    this.URL = url;
    this.token = '';
  }
  async fetchMethod(fetchObj) {
    const {
      url: fetchUrl = '',
      method: fetchMethod = 'GET',
      params: fetchParams = undefined,
      body: fetchBody = JSON.stringify({}),
      headers: fetchHeaders = {
        'Content-Type': 'application/json',
      },
    } = fetchObj;
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
    return response;
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
    return this.fetchMethod({
      method: 'POST',
      url: `${this.URL}/login`,
      body: JSON.stringify({ 'login': login, 'password': password }),
    });
  }

  registerUser(login, password) {
    return this.fetchMethod({
      method: 'POST',
      url: `${this.URL}/registration`,
      body: JSON.stringify({ 'login': login, 'password': password }),
    });
  }

  addNewTweet(newTweettext) {
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
    return this.fetchMethod({
      method: 'DELETE',
      url: `${this.URL}/tweet/${id}`,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }

  async editTweet(id, editText) {
    return this.fetchMethod({
      method: 'PUT',
      url: `${this.URL}/tweet/${id}`,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      },
      body: JSON.stringify({ 'text': editText }),
    });
  }

  async addNewComment(id, newCommentText) {
    return this.fetchMethod({
      method: 'POST',
      url: `${this.URL}/tweet/${id}/comment`,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      },
      body: JSON.stringify({ 'text': newCommentText }),
    });
  }
}
export default TweetFeedApiService;
