const array = [
  {
    value: 'Пункт 1.',
    children: null,
  },
  {
    value: 'Пункт 2.',
    children: [
      {
        value: 'Подпункт 2.1.',
        children: null,
      },
      {
        value: 'Подпункт 2.2.',
        children: [
          {
            value: 'Подпункт 2.2.1.',
            children: null,
          },
          {
            value: 'Подпункт 2.2.2.',
            children: null,
          }
        ],
      },
      {
        value: 'Подпункт 2.3.',
        children: null,
      }
    ]
  },
  {
    value: 'Пункт 3.',
    children: null,
  }
];
function createList(title='',list=[]) {
   const h = document.createElement('h2');
  h.innerText = title;
  
  function r(arr) {
    const ul = document.createElement('ul');
    ul.style.fontSize = '0.9em';
    arr.forEach((elem) => {
      const li = document.createElement('li');
      li.innerHTML = elem.value;

      if (elem.children !== null) {
        li.appendChild(r(elem.children));
      }
      
      ul.appendChild(li);
    });

    return ul;
  }
  document.body.appendChild(h)
  document.body.appendChild(r(list));
  document.getElementsByTagName('ul')[0].style.fontSize = '1em';
}
createList('title',array)