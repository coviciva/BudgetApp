import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext);
  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });

  const { incomeText, incomeAmount } = income;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const onSubmitIncome = (e) => {
    e.preventDefault();

    if (incomeText !== "") {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText: incomeText,
        incomeAmount: incomeAmount * 1,
      };
      addIncome(newIncomeTransaction);

      setIncome({
        incomeText: "",
        incomeAmount: 0,
      });
    }
  };

  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
  });

  const { expenseText, expenseAmount } = expense;

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const onSubmitExpense = (e) => {
    e.preventDefault();

    if (expenseText !== "") {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText: expenseText,
        expenseAmount: expenseAmount * 1,
      };
      addExpense(newExpenseTransaction);

      setExpense({
        expenseText: "",
        expenseAmount: 0,
      });
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input
            type="text"
            placeholder="Add Income..."
            autoComplete="off"
            name="incomeText"
            value={incomeText}
            onChange={onChangeIncome}
          />
          <input
            type="number"
            placeholder="Amount"
            autoComplete="off"
            name="incomeAmount"
            value={incomeAmount}
            onChange={onChangeIncome}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>

      <form onSubmit={onSubmitExpense}>
        <div className="input-group expense">
          <input
            type="text"
            placeholder="Add Expense..."
            autoComplete="off"
            name="expenseText"
            value={expenseText}
            onChange={onChangeExpense}
          />
          <input
            type="number"
            placeholder="Amount"
            autoComplete="off"
            name="expenseAmount"
            value={expenseAmount}
            onChange={onChangeExpense}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
