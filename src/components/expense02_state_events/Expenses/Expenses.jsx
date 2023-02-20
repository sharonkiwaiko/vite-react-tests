import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesData from "../../../data/ExpensesData";

const Expenses = () => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    
     setFilteredYear(selectedYear);
  };
  const expensesList = ExpensesData.map((itm) => (
    <ExpenseItem key={itm.id} itm={itm} amount={itm.amount} date={itm.date} />
  ));

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {expensesList}
      </Card>
    </div>
  );
};

export default Expenses;
