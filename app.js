console.log('Hare Krishna');

const bill = document.getElementById('bill-input');
const customerGave = document.getElementById('customer-input');
const btnContainer = document.querySelector('.btn-container');
const alertText = document.querySelector('.alert');
const table = document.querySelector('.table');

function alertMsg(type, msg) {
  const tID = setInterval(() => {
    alertText.innerText = msg;
    alertText.classList.add(`alert-${type}`);
    alertText.classList.add('show-alert');
  }, 0);

  setTimeout(() => {
    clearInterval(tID);
    alertText.classList.remove(`alert-${type}`);
    alertText.classList.remove('show-alert');
  }, 1000);
}

const notesArr = [2000, 500, 100, 50, 20, 10, 5, 2, 1];

const defaultData = notesArr.reduce((acc, curr) => {
  acc[curr] = '-';
  return acc;
}, {});
console.log(defaultData);

function displayData(data) {
  const dataArr = Object.entries(data).sort((a, b) => b[0] - a[0]);
  const myNumbers = dataArr
    .map((item) => {
      const [, number] = item;
      return `
    <td class="number-${number}">${number}</td>
    `;
    })
    .join('');

  const numbersToShow = `
  <th>no of note</th>
  ${myNumbers}
  `;

  const myNotes = dataArr
    .map((item) => {
      const [note] = item;
      return `
    <td class="number-${note}">${note}</td>
    `;
    })
    .join('');

  const notesToShow = `
  <th>note</th>
  ${myNotes}
  `;

  table.innerHTML = `
  <tr class="numbers">${numbersToShow}</tr>
  <tr class="notes">${notesToShow}</tr>
  `;
}

window.addEventListener('DOMContentLoaded', () => {
  displayData(defaultData);
});
