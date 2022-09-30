# Mark-10 Cash Register App

This is a cash register app which tells the cashier/user rto return the amount in change to the excess money given by the customer in minimum number of notes.

[Live Link](https://neog-mark10-cash-register-manager-app.vercel.app/)

## Tech Used

- HTML
- CSS
- JS

## How it works ?

- Enter the bill amount
- Enter the money given by customer (if money given by the customer is less than the bill Amount, a error message to user asking for remaining money is shown 🤑)
- If the customer pays excess money, the table shows with number of notes that the cashier needs to give back to the customer.
- I have added error messages for the user for the following:
  1. If any input is empty, -ve or zero
  1. Error Message to user of "asking for the extra money from customers" when cash given by customer is less than the bill amount.
  1. "Don't pay back msg" when bill is equal to amount given by customer.
- Black Color and slight increase in font-size for non-zero "No. of Notes"
- I have used Event Delegation on BtnContainer.
- Clicking Clear button empties all input fields,defaults the output and clears the error message (if present on the screen).
- **(Additional feature)** If you click input with output present for previous inputs, we assume you are changing the inputs, so we clear down the output.
- Footer Links with target attribute
