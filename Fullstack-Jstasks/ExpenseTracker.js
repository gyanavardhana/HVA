
/*
Define an array called expenses containing several objects, 
each representing an expense. Each expense object should have properties such as
 id, name, amount, date, and any other relevant details.
*/
const expenses = [
    { id: 1, name: 'Shopping', amount: 1000, date: '2021-06-01' },
    { id: 2, name: 'Grocery', amount: 500, date: '2021-06-02' },
    { id: 3, name: 'Rent', amount: 2000, date: '2021-06-03' },
    { id: 4, name: 'Travel', amount: 1500, date: '2021-06-04' },
]

/*
Create a class called Expense to represent an expense, 
and use this class to create objects for each expense in the expenses array.
*/

class Expense{
    constructor(id, name, amount, date){
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.date = date;
    }
}

/*
Define functions addExpense() to add a new expense, updateExpense() 
to update an existing expense, removeExpense() to remove an expense,
and displayExpenses() to display all expenses in the following format: ExpenseName - Amount (Date).
*/

Expense.prototype.addExpense = function(id, name, amount, date, expenses){
    let newExpense = new Expense(id, name, amount, date);
    expenses.push(newExpense);
};

Expense.prototype.updateExpense = function(id, amount, expenses){
    let expense = expenses.find((expense) => expense.id === id);
    expense.amount = amount;
}

Expense.prototype.removeExpense = function(id, expenses){
    let index = expenses.findIndex((expense) => expense.id === id);
    expenses.splice(index, 1);
}


Expense.prototype.displayExpenses = function(expenses){
    for(let i = 0; i < expenses.length; i++){
        console.log(`${expenses[i].name} - $${expenses[i].amount} (${expenses[i].date})`);
    }
}

const newExpense = new Expense();

newExpense.addExpense(5, 'Entertainment', 200, '2021-06-05', expenses);
newExpense.displayExpenses(expenses);
newExpense.updateExpense(5, 250, expenses);
newExpense.displayExpenses(expenses);
newExpense.removeExpense(5, expenses);
newExpense.displayExpenses(expenses);