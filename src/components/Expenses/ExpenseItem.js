import "./ExpenseItem.css";
import Date from "./ExpenseDate";
import React from "react";
function ExpenseItem(props) {
  return (
    <div className="wrapper">
    <Date date={props.date}/>
      <div className="wrap">
        <h1 className="item">{props.name}</h1>
        <h1 id="rs">₹ {props.amount}</h1>
      </div>
    </div>
  );
}
export default ExpenseItem;
