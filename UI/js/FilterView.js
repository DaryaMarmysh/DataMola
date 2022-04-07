class FilterView {
  constructor(containerId) {
    this.selectList = document.querySelector(`#${containerId}`);
  }

  display(tw) {
    if (tw !== undefined) {
      const authorNameList = new Set(tw.map((t) => t.author));
      authorNameList.forEach((option) => {
        const op = document.createElement("option");
        op.value = option;
        op.text = option;
        this.selectList.add(op);
      }
      )
    }
  }
}
export default FilterView;
/////доделать фильтры