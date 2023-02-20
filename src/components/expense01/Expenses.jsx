import data from "../../data/ExpensesData.js";
import ExpenseItem from "./ExpenseItem";

const Expenses = () => {
  const lst = data.map((itm) => <ExpenseItem key={itm.id} itm={itm} />);
  return <div>{lst}</div>;
};

export default Expenses;
