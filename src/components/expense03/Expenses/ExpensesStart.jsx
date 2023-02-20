import Expenses from "./Expenses";
import ExpenseData from "../../../data/ExpensesData";
import NewExpense from "../NewExpense/NewExpense";
import { useState } from "react";

function ExpensesStart() {
  const [expenses, setExpenses] = useState(ExpenseData);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      {/* */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />;
    </div>
  );
}

export default ExpensesStart;
