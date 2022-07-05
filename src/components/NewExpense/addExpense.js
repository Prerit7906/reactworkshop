import "./addExpense.css";
import React from 'react';
import Form from './form.js';

export default function addExpense(prop) {
  const addExpenseHandler=(getData)=>{
    const expense={...getData,
    id: Math.random().toString()
    }
    prop.onNewData(expense);
  }
  return (
    <div>
        <Form onAddExpense={addExpenseHandler}/>
    </div>
  )
}
