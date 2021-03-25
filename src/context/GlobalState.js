import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  incomeTransactions: [
    { id: 1, incomeText: "Car sold", incomeAmount: 1500 },
    { id: 2, incomeText: "Salary", incomeAmount: 500 },
    { id: 3, incomeText: "Bonus", incomeAmount: 200 },
  ],

  expenseTransactions: [
    { id: 4, expenseText: "Rent", expenseAmount: 150 },
    { id: 5, expenseText: "Bank", expenseAmount: 500 },
    { id: 6, expenseText: "Clothes", expenseAmount: 100 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
