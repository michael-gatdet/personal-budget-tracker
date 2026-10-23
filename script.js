
"use strict";

// ARRAY: stores multiple expense records.
let expenses = [];
let monthlyBudget = 0;
let nextId = 1;

// DOM ELEMENTS
const budgetForm = document.getElementById("budget-form");
const budgetInput = document.getElementById("budget-input");

const expenseForm = document.getElementById("expense-form");
const expenseName = document.getElementById("expense-name");
const expenseAmount = document.getElementById("expense-amount");
const expenseCategory = document.getElementById("expense-category");

const totalBudget = document.getElementById("total-budget");
const totalExpenses = document.getElementById("total-expenses");
const remainingBalance = document.getElementById("remaining-balance");

const foodTotal = document.getElementById("food-total");
const transportTotal = document.getElementById("transport-total");
const savingsTotal = document.getElementById("savings-total");

const budgetStatus = document.getElementById("budget-status");
const expenseList = document.getElementById("expense-list");
const expenseCount = document.getElementById("expense-count");
const appMessage = document.getElementById("app-message");

// Format Kenyan shillings.
function formatMoney(amount) {
    return new Intl.NumberFormat("en-KE", {
        style: "currency",
        currency: "KES",
        maximumFractionDigits: 2
    }).format(amount);
}

// LOOP: calculate total spending.
function calculateTotal() {
    let total = 0;

    for (const expense of expenses) {
        total += expense.amount;
    }

    return total;
}

// Calculate spending in a particular category.
function calculateCategory(category) {
    let total = 0;

    for (const expense of expenses) {
        if (expense.category === category) {
            total += expense.amount;
        }
    }

    return total;
}

// CONDITIONALS: evaluate the budget.
function updateBudgetStatus(total, remaining) {
    if (monthlyBudget <= 0) {
        budgetStatus.textContent = "Please set a valid monthly budget.";
    } else if (total > monthlyBudget) {
        budgetStatus.textContent =
            "Warning! You have exceeded your monthly budget.";
    } else if (total >= monthlyBudget * 0.8) {
        budgetStatus.textContent =
            "Caution! You have used at least 80% of your budget.";
    } else if (total === 0) {
        budgetStatus.textContent =
            "Your budget is ready. Start recording your expenses.";
    } else {
        budgetStatus.textContent =
            "Good job! Your spending is within budget.";
    }

    if (remaining < 0) {
        remainingBalance.style.color = "#b42318";
    } else {
        remainingBalance.style.color = "";
    }
}

// DOM MANIPULATION: refresh all dashboard figures.
function renderDashboard() {
    const total = calculateTotal();
    const remaining = monthlyBudget - total;

    totalBudget.textContent = formatMoney(monthlyBudget);
    totalExpenses.textContent = formatMoney(total);
    remainingBalance.textContent = formatMoney(remaining);

    foodTotal.textContent = formatMoney(calculateCategory("Food"));
    transportTotal.textContent =
        formatMoney(calculateCategory("Transport"));

    // Remaining budget, not a separate savings account.
    savingsTotal.textContent = formatMoney(Math.max(0, remaining));

    updateBudgetStatus(total, remaining);

    // Remove old records before displaying the updated array.
    expenseList.replaceChildren();

    // LOOP: display every expense.
    for (const expense of expenses) {
        const item = document.createElement("li");
        const details = document.createElement("span");
        const deleteButton = document.createElement("button");

        details.textContent =
            `${expense.name} — ${expense.category} — ${formatMoney(expense.amount)}`;

        deleteButton.textContent = "Delete";
        deleteButton.type = "button";

        // EVENT LISTENER: delete an expense.
        deleteButton.addEventListener("click", function () {
            expenses = expenses.filter(
                record => record.id !== expense.id
            );

            appMessage.textContent =
                `${expense.name} was deleted successfully.`;

            renderDashboard();
        });

        item.append(details, deleteButton);
        expenseList.appendChild(item);
    }

    expenseCount.textContent =
        `${expenses.length} expense${expenses.length === 1 ? "" : "s"} recorded`;
}

// EVENT LISTENER: save monthly budget.
budgetForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const value = Number(budgetInput.value);

    // CONDITIONAL: validate budget.
    if (!Number.isFinite(value) || value <= 0) {
        appMessage.textContent =
            "Please enter a budget greater than zero.";
        return;
    }

    monthlyBudget = value;

    appMessage.textContent = "Monthly budget saved successfully.";

    renderDashboard();
});

// EVENT LISTENER: add expense.
expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value);
    const category = expenseCategory.value;

    // CONDITIONALS: validate input.
    if (name === "") {
        appMessage.textContent = "Please enter an expense name.";
        return;
    }

    if (!Number.isFinite(amount) || amount <= 0) {
        appMessage.textContent =
            "Please enter an amount greater than zero.";
        return;
    }

    if (category === "") {
        appMessage.textContent = "Please choose a category.";
        return;
    }

    // Add an expense object to the array.
    expenses.push({
        id: nextId++,
        name: name,
        amount: amount,
        category: category
    });

    appMessage.textContent = "Expense added successfully.";

    expenseForm.reset();
    renderDashboard();
});

// Initial dashboard display.
renderDashboard();
