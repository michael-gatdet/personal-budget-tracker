// SpendWise Budget Data

let budget = 50000;
let expenses = 15000;

// Function to calculate remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// Collect user input
let userBudget = prompt("Enter your monthly budget:");
let userExpenses = prompt("Enter your total expenses:");

// Convert user input from text to numbers
userBudget = Number(userBudget);
userExpenses = Number(userExpenses);

// Calculate the remaining balance
let remainingBalance = calculateBalance(userBudget, userExpenses);

// Display results in the console
console.log("SpendWise Budget Summary");
console.log("Budget: KSh " + userBudget);
console.log("Expenses: KSh " + userExpenses);
console.log("Remaining Balance: KSh " + remainingBalance);