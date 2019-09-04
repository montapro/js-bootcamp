const account = {
  name: 'Andrew Mead',
  expenses: [],
  income: [],

  // add expenses to the end of account.expenses array
  addExpense: function(description, amount) {
    this.expenses.push({
      description: description,
      amount: amount,
    })
  },
  
  // add incomes to the end of account.incomes array
  addIncome: function(description, amount) {
    this.income.push({
      description: description,
      amount: amount,
    })
  },

  // Count together all expenses
  getAccountSummary: function() {
    // Declare totalExpenses for 0 expenses
    let totalExpenses = 0
    let totalIncomes = 0
    let balance = 0

    // Add all amount together in account.expenses array to totalExpenses variable
    this.expenses.forEach(function(expense) {
      totalExpenses += expense.amount
    })

    
    // Add all amount together in account.income array to totalIncome variable
    this.income.forEach(function(income) {
      totalIncomes += income.amount
    })
    
    // Calculate balance
    balance = totalIncomes - totalExpenses

    // Return Summary
    return `${this.name} has a balance of $${balance}. $${totalIncomes} in income. $${totalExpenses} in expenses.`
  },
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())

