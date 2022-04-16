class ErrorView {
  constructor(containerId) {
    this.main = document.querySelector(`#${containerId}`);
    this.template = document.querySelector('#errorPageTemplate');
  }

  display(errorSts = 'Упс!') {
    const oldChild = document.querySelector('#pageContainer');
    const clone = this.template.content.cloneNode(true);
    let errorMsg;
    switch (errorSts) {
      case 404: errorMsg = 'Не удалось обнаружить указанный URL на сервере'; break;
      case 505: errorMsg = 'Внутренняя ошибка сервера'; break;
      case 403: errorMsg = 'Ошибка авторизации'; break;
      case 405: errorMsg = 'Метод не разрешён'; break;
      case 500: errorMsg = 'Внутренняя ошибка сервера'; break;
      case 401: this.loginPLoad(); break;
      default: errorMsg = 'Неизвестная ошибка'; break;
    }
    const errorStatus = clone.querySelector('.error-code');
    const errorMessage = clone.querySelector('.error-message');
    errorStatus.innerHTML = errorSts;
    errorMessage.innerHTML = errorMsg;
    if (oldChild) {
      this.main.replaceChild(clone, oldChild);
    } else {
      this.main.appendChild(clone);
    }
  }
}
export default ErrorView;