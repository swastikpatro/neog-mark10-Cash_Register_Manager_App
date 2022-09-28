# Mark-10 Cash Register App

This is a cash register app which tells the cashier/user rto return the amount in change to the excess money given by the customer in minimum number of notes.

[Live Link](https://neog-mark10-cash-register-manager-app.vercel.app/)

## How it works ?

- Enter the bill amount
- Enter the money given by customer (if money given the customer is less than the bill Amount, a alert is popped 🤑)
- If the customer pays excess money, the table shows with number of notes that the cashier needs to give back to the customer.
- I have added alerts for the following:
  1. Empty Inputs
  1. Negative inputs
  1. Alert of "asking for the extra money from customers" when cash given by customer is less than the bill amount.
  1. Onclicking clear btn
  1. "Don't pay back msg" when bill is equal to amount given by customer.
  1. "Done" alert msg when the data is showm on the table
- Black Color and slight increase in font-size for non-zero "No. of Notes"
- I have used Event Delegation on BtnContainer.
- Clicking Clear button empties all input fields,empties the output.
- **(Additional feature)** If you click input with output showing for previous inputs, we assume you are changing the inputs, so we clear down the output.
- Footer Links with target attribute
