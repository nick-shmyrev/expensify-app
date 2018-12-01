import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <li>
    {new Date(createdAt).toDateString()}: <Link to={`/edit/${id}`} title="Edit Expense"><b>{description}</b></Link>, ${amount / 100}
  </li>
);

export default ExpenseListItem;
