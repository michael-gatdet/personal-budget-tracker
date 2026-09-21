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
