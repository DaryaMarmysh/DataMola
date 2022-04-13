class ErrorView {
  constructor(containerId) {
    this.main = document.querySelector(`#${containerId}`);
    this.template = document.querySelector('#errorPageTemplate');
  }

  display() {
    const oldChild = document.querySelector('#pageContainer');
    const clone = this.template.content.cloneNode(true);
    if (oldChild) {
      this.main.replaceChild(clone, oldChild);
    } else {
      this.main.appendChild(clone);
    }
  }
}
export default ErrorView;