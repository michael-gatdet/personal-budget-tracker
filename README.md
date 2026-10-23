SpendWise Dashboard

Description

SpendWise is a personal budget tracker dashboard designed to help users view and organize their financial information.

This week, I rebuilt the Budget Tracker layout using CSS Grid and Flexbox to create a clean and responsive dashboard interface.

What I Built

1. Sidebar Navigation

The dashboard includes a sidebar with navigation links for:

* Dashboard
* Expenses
* Income
* Savings
* Reports

2. Dashboard Header

The header displays the SpendWise title, a short description, and a welcome message.

3. Financial Category Cards

The dashboard contains six financial cards:

* Food
* Transport
* Rent
* Entertainment
* Savings
* Utilities

Each card contains realistic static financial information.

4. CSS Grid

CSS Grid is used for the main dashboard layout and for arranging the financial cards.

The desktop layout contains a sidebar and main content area.

5. Flexbox

Flexbox is used inside:

* The sidebar
* Navigation menu
* Dashboard header
* Financial cards

6. CSS Custom Properties

CSS variables are defined inside :root for:

* Brand color
* Accent color
* Background color
* Surface color
* Primary text color
* Secondary text color
* Border color

7. Responsive Design

A media query is used below 768px to change the dashboard into a single-column layout for smaller screens.

8. Card Micro-interactions

Dashboard cards include hover and keyboard focus effects using:

* transform
* box-shadow
* transition

The animation duration is 200ms.

9. Dark Theme

A dark theme is included using:

@media (prefers-color-scheme: dark)

The dark theme overrides the CSS variables without changing the main layout styles.

Technologies Used

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Custom Properties
* Google Fonts
* Responsive Design



JavaScript Foundation

SpendWise is a personal budget tracker that allows users to enter their budget and expenses and calculate their remaining balance.

JavaScript Concepts Implemented

The project uses JavaScript variables, data types, user input, calculations, functions, and console output.

Variables

Variables are used to store the budget, expenses, user budget, user expenses, and remaining balance.

User Input

The prompt() function collects the user's monthly budget and total expenses. The Number() function converts the input values from text into numbers.

Budget Calculations

The application calculates the remaining balance by subtracting total expenses from the user's budget.

Functions

The calculateBalance() function calculates the remaining balance. The function makes the calculation reusable and keeps the application logic organized.

Displaying Results

The application uses console.log() to display the budget, expenses, and remaining balance clearly in the browser console.

Improvements made: Dynamic financial cards, expense form, category totals, delete buttons, and budget warnings.



Conditionals: Validate inputs and warn when spending reaches 80% or exceeds the budget.



Arrays: Store multiple expense objects in the expenses array.



Loops: Calculate totals and display expense records.



DOM manipulation: Update dashboard amounts, messages, and expense lists.



Events: Handle budget submissions, expense submissions, and Delete button clicks.



Challenges and solutions: Explain how you recalculated totals after adding or deleting expenses and handled invalid input.