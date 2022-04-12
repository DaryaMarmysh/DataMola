class FilterView {
  constructor(containerId) {
    this.container = document.querySelector(`#${containerId}`);
    this.template = document.querySelector('#filterTemplate');
    this.hashtagsList = [];
    this.hashtagTemplate = document.querySelector('#smallHashtagTemplate');
  };

  bindControllerTweets(searchFun) {
    const form = document.querySelector('#filterForm');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const startDate = form.querySelector('#startDate').value;
      const endDate = form.querySelector('#endDate').value;
      const authorField = form.querySelector('#authorNameFilter').value;
      const filterTextField = form.querySelector('#filterTextField').value;
      const filterConfig = {
        text: filterTextField,
        author: authorField,
        dateFrom: startDate === '' ? undefined : new Date(startDate),
        dateTo: endDate === '' ? undefined : new Date(endDate),
        hashtags: this.hashtagsList,
      };
      const closeFilterBut = document.querySelector('#closeFilterButton');
      closeFilterBut.click();
      searchFun(filterConfig);
      //console.log(filterConfig)
    });
  }

  display() {
    const oldChild = document.querySelector('#filterContainer');
    const clone = this.template.content.cloneNode(true);
    const authorNameList = this.authors;
    const selectList = clone.querySelector('#authorNameFilter');
    const addHashtagButton = clone.querySelector('#addHashtagButton');
    const hashtagsContainer = clone.querySelector('#hashtagsContainer');
    const hashtagField = clone.querySelector('#hashtagField');
    addHashtagButton.addEventListener('click', (event) => {
      if (hashtagField.value.trim() !== '') {
        this.hashtagsList.push(hashtagField.value);
        const hashclone = this.hashtagTemplate.content.cloneNode(true);
        const hashText = hashclone.querySelector('#hashtagText');
        hashText.textContent = `#${hashtagField.value}`;
        hashtagsContainer.appendChild(hashclone); 
        //console.log(this.hashtagsList);
      }
    });
    hashtagsContainer.addEventListener('click', (event) => {
      const target = event.target;
      const parent = target.closest('.hashtag');
      hashtagsContainer.removeChild(parent);
      this.hashtagsList.splice(this.hashtagsList.indexOf(parent.textContet), 1);
      //console.log(this.hashtagsList);
    });
    const filterContainer = clone.querySelector('#filterContainer');
    const closeFilterBut = clone.querySelector('#closeFilterButton');
    closeFilterBut.addEventListener('click', () => {
      filterContainer.classList.add('close');
    });
    authorNameList.forEach((option) => {
      const op = document.createElement('option');
      op.value = option;
      op.text = option;
      selectList.add(op);
    });
    if (oldChild) { this.container.replaceChild(clone, oldChild); }
    else {
      this.container.appendChild(clone);
    }
  }
}
export default FilterView;
/////доделать фильтры