import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ExpenseTransaction from "./ExpenseTransaction";

const ExpenseList = () => {
  const { expenseTransactions } = useContext(GlobalContext);
  return (
    <div className="transactions transactions-expense">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {expenseTransactions.map((expenseTransaction) => {
          return (
            <ExpenseTransaction
              expenseTransaction={expenseTransaction}
              key={expenseTransaction.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ExpenseList;
