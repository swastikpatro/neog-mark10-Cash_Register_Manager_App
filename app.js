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
  acc[curr] = '--';
  return acc;
}, {});
// console.log(defaultData);

function checkAllValues(arr, val) {
  return [...arr].every((number) => number == val);
}

function displayData(data) {
  const dataArr = Object.entries(data).sort((a, b) => b[0] - a[0]);

  const myNumbers = dataArr
    .map((item) => {
      const [, number] = item;
      const cond = number > 0;
      return `
    <td class="number-${number}" 
    style= "
    color:${cond ? '#222' : '#fff'}; 
    font-size:${cond ? '1.15rem' : '1rem'}";
    >
    ${number}
    </td>
    `;
    })
    .join('');

  const numbersToShow = `
  <th>no. of notes</th>
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
  <th>notes</th>
  ${myNotes}
  `;

  table.innerHTML = `
  <tr class="numbers">${numbersToShow}</tr>
  <tr class="notes">${notesToShow}</tr>
  `;

  const isNullified = checkAllValues([...Object.values(data)], 0);
  const isDefault = checkAllValues([...Object.values(data)], '--');
  if (isDefault) return;
  isNullified
    ? alertMsg('success', 'Dont pay anything back to customer')
    : alertMsg('success', 'Done');
}

function evaluateChange(billVal, customerMoneyVal, currencyArr) {
  let returnMoney = customerMoneyVal - billVal;
  const outputObjData = {};

  for (let i = 0; i < currencyArr.length; i++) {
    if (returnMoney < currencyArr[i]) {
      outputObjData[currencyArr[i]] = 0;
      // console.log(`${currencyArr[i]} skipped`);
    } else {
      outputObjData[currencyArr[i]] = Math.floor(returnMoney / currencyArr[i]);
      returnMoney = returnMoney % currencyArr[i];
    }
  }
  // console.log(returnMoney);
  return outputObjData;
}

function handleContainerClick(e) {
  e.preventDefault();
  if (!('btn' in e.target.dataset)) {
    return;
  }
  const btnClicked = e.target.dataset.btn;
  const billAmount = bill.valueAsNumber;
  const customerAmount = customerGave.valueAsNumber;
  if (btnClicked === 'clear') {
    bill.value = '';
    customerGave.value = '';
    displayData(defaultData);
    alertMsg('success', 'Cleared');
    return;
  }
  if (!(bill.value && customerGave.value)) {
    alertMsg('danger', 'Please fill inputs with numbers only..');
    return;
  }
  if (billAmount < 0 || customerAmount < 0) {
    alertMsg('danger', "Bill or Cash can't be negative.");
    return;
  }
  if (billAmount > customerAmount) {
    alertMsg(
      'danger',
      `Customer please pay Rs. ${billAmount - customerAmount} more 🤨`
    );
    return;
  }
  const outputData = evaluateChange(billAmount, customerAmount, notesArr);
  displayData(outputData);
}

window.addEventListener('DOMContentLoaded', () => {
  displayData(defaultData);
});

btnContainer.addEventListener('click', handleContainerClick);

[...document.querySelectorAll('input[type="number"]')].forEach((input) => {
  input.addEventListener('click', () => {
    displayData(defaultData);
  });
});
