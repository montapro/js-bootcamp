let myAccount = {
  name: 'Andrew Mead',
  expenses: 0,
  income: 0,
}

let addExpense = function(account, amount) {
  account.expenses = account.expenses + amount
  
  return account.expenses
}

// addIncome
let addIncome = function(account, income) {
  account.income = account.income + income
}

// resetAccount
let resetAccount = function(account) {
  account.expenses = 0
  account.income = 0
}

// getAccountSummary
// Account for Andrew has $900. $1000 in income. $100 in expenses.
let getAccountSummary = function(account) {
  let balance = account.income - account.expenses
  return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

// addIncome
addIncome(myAccount, 2000)
// addExpense
addExpense(myAccount, 2.50)
// addExpense
addExpense(myAccount, 160)
// getAccountSummary
console.log(getAccountSummary(myAccount))
// resetAccount
resetAccount(myAccount)
// getAccountSummary
console.log(getAccountSummary(myAccount))