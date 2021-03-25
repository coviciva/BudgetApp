import React, { useState } from "react";

const AddTransaction = () => {
  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
    console.log(income);
  };

  const onSubmitIncome = (e) => {
    e.preventDefault();
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
            onChange={onChangeIncome}
          />
          <input
            type="number"
            placeholder="Amount"
            autoComplete="off"
            name="incomeAmount"
            onChange={onChangeIncome}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>

      <form>
        <div className="input-group expense">
          <input type="text" placeholder="Add Expense..." autoComplete="off" />
          <input type="number" placeholder="Amount" autoComplete="off" />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
