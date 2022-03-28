function createCalendar(year, month) {
  const myDate = new Date(year, month - 1);
  const dayCount = new Date(year, month, 0).getDate();
  const weekday = myDate.getDay();
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  thead.innerHTML = '<tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th></tr>';
  let currentDay = 1;

  const startWith = weekday === 0 ? 7 : weekday;
  const fistWeekDaysCount = 7 - startWith + 1;
  const fullWeekCount = Math.floor((dayCount - fistWeekDaysCount) / 7);
  const lastWeekDaysCount = dayCount - fistWeekDaysCount - fullWeekCount * 7;
  const weeksCount = lastWeekDaysCount !== 0 ? fullWeekCount + 2 : fullWeekCount + 1;
  for (let i = 0; i < weeksCount; i += 1) {
    const row = document.createElement('tr');
    let cellText;
    for (let j = 0; j < 7; j += 1) {
      if ((i === 0 && j < startWith) || (i === weeksCount - 1 && currentDay > dayCount)) {
        cellText = document.createTextNode('');
      }
      else {
        cellText = document.createTextNode(currentDay);
        currentDay += 1;
      }
      const cell = document.createElement('td');
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
  table.appendChild(thead);
  table.appendChild(tbody);
  document.getElementById('body').appendChild(table);
}

createCalendar(2022, 7)
