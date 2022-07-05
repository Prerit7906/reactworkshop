import React from 'react';
import "./ExpenseDate.css";

export default function expenseDate(props) {
    const month=props.date.toLocaleString('en-US',{month:"short"});
    const year=props.date.getFullYear();
    const day=props.date.toLocaleString('en-US',{day:"2-digit"});
  return (
    <h2 className="date">
     <span className='mydate'>{month}</span>
      <span className='mydate'>{day},</span>
      <div className='mydate'>{year}</div>
    </h2>
  )
}
