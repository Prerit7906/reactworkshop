import "./ExpenseItem.css";
import {useState} from 'react';
import Date from "./ExpenseDate";
import React from "react";
function ExpenseItem(props) {
  return (
    <div className="wrapper">
    <Date date={props.date}/>
      <div className="wrap">
        <h2 className="item">{props.name}</h2>
        <h1>${props.amount}</h1>
      </div>
    </div>
  );
}
export default ExpenseItem;
