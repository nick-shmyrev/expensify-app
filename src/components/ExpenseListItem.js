import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <li>
    {moment(createdAt).format('YYYY/MM/DD')} - <Link to={`/edit/${id}`} title="Edit Expense"><b>{description}</b></Link>, {numeral(amount / 100).format('$0,0.00')}
  </li>
);

export default ExpenseListItem;
