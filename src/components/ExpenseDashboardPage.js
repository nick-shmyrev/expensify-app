import React from 'react';

import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div>
    <h1>Expense Dashboard</h1>
    <ExpenseListFilters/>
    <ExpensesSummary/>
    <ExpenseList/>
  </div>
);

export default ExpenseDashboardPage;
