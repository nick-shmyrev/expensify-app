import React from 'react';

import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <h1>Expense Dashboard</h1>
    <ExpenseListFilters/>
    <ExpenseList/>
  </div>
);

export default ExpenseDashboardPage;
