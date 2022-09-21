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
