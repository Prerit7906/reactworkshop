import "./ExpenseFilter.css";
import React from "react";

export default function ExpenseFilter(props) {
  function onChangeHandler(event){
      props.filteredYear(event.target.value);
      console.log(event.target.value);
  }
  return (
    <div className="filter">
      <span>Filter By Year</span>
      <select value={props.selected}
      onChange={onChangeHandler}
       name="year" id="year">
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
}
