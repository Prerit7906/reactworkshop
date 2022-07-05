import React from 'react';
import "./ExpenseDate.css";

export default function expenseDate(props) {
    const month=props.date.toLocaleString('en-US',{month:"long"});
    const year=props.date.getFullYear();
    const day=props.date.toLocaleString('en-US',{day:"2-digit"});
  return (
    <h2 className="date">
      <div>{month}</div>
      <div>{day},</div>
      <div>{year}</div>
    </h2>
  )
}
