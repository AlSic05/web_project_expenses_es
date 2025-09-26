let budgetValue = 0;
let totalExpensesValue = 0;

const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

function calculateAverageExpense() {
  if (expenseEntries.length === 0) return 0;

  let totalAverageExpense = 0;
  for (const expense of expenseEntries) {
    totalAverageExpense += expense[1];
  }

  return totalAverageExpense / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

let balanceColor = "green";

function updateBalanceColor() {
  const balance = calculateBalance();
  if (balance < 0) {
    balanceColor = "red";
  } else if (balance < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let totalCategoryExpenses = 0;
  for (const expense of expenseEntries) {
    if (expense[0] === category) {
      totalCategoryExpenses += expense[1];
    }
  }

  return totalCategoryExpenses;
}

function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];

  const categoriesData = [];

  for (const category of categories) {
    const total = calculateCategoryExpenses(category);
    categoriesData.push([category, total]);
  }

  let largestCategory = categoriesData[0][0];
  let maxTotal = categoriesData[0][1];

  for (const [category, total] of categoriesData) {
    if (total > maxTotal) {
      maxTotal = total;
      largestCategory = category;
    }
  }

  return largestCategory;
}

function addExpenseEntry(values) {
  expenseEntries.push(values);
  totalExpensesValue += values[1];
}
