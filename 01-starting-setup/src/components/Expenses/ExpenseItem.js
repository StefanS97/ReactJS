import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ expenses }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={expenses.date} />
        <div className="expense-item__description">
          <h2>{expenses.title}</h2>
          <div className="expense-item__price">${expenses.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
