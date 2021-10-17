import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    onClickHandler2();
  };

  const onClickHandler = () => {
    setContent(
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onClick={onClickHandler2}
      />
    );
  };

  const onClickHandler2 = () => {
    setContent(<button onClick={onClickHandler}>Add new Expense</button>);
  };

  const [content, setContent] = useState(
    <button onClick={onClickHandler}>Add new Expense</button>
  );

  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
