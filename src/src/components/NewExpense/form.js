import React from 'react';
import './form.css';
import { useState } from 'react';

export default function Form(prop) {
  const [expenseTitle,setExpenseTitle]= useState("");
  const [expenseAmount,setExpenseAmount]= useState("");
  const [expenseDate,setExpenseDate]= useState("");
  function titleChangeHandler(e){
    // setInputData((prevData)=>{
    //     return {...prevData, title:e.target.value
    //     };
  // }
  // );
    setExpenseTitle(e.target.value);
    // console.log(inputData);
  }
  function amountChangeHandler(e){
    // setInputData((prevData)=>{
    //     return {...prevData, amount:e.target.value
    //     };
    // });
    setExpenseAmount(e.target.value);
    // console.log(inputData);
  }
  function dateChangeHandler(e){
    // setInputData((prevData)=>{
    //     return {...prevData, date:e.target.value
    //     };
    // });
    setExpenseDate(e.target.value)
    // console.log(inputData);
  }
  function submitHandler(e){
    e.preventDefault();
    // console.log(inputData);
    const expense={
      title:expenseTitle,
      amount:expenseAmount,
      date:new Date(expenseDate)
    }
    prop.onAddExpense(expense);
    setExpenseAmount('');
    setExpenseDate('');
    setExpenseTitle('');
  }
  return (
    <form
     onSubmit={submitHandler}
     className='wrapper1'>
       <h2 className="Error">Add new expense</h2>
        <div className='wrap'>
        <label>Title</label>
        <input type="text" 
        value={expenseTitle}
        onChange={titleChangeHandler}
         ></input>
        </div>
        <div className='wrap'>
        <label>Amount</label>
        <input type="number" 
        value={expenseAmount}
        onChange={amountChangeHandler}
        ></input>
        </div>
        <div className='wrap'>
        <label>Date</label>
        <input type="date" 
         value={expenseDate}
        onChange={dateChangeHandler}
         ></input>
        </div>
        <div><button>Submit</button></div>

    </form>
  )
}
