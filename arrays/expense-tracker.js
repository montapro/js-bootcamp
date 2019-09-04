const account = {
  name: 'Andrew Mead',
  expenses: []
}



account.add.Expense('Rent', 950)
account.add.Expense('Coffee', 2)
console.log(account.getAccountSummary())