import "./App.css";
import { AuthContextProvider } from './components/WebsiteLogEnd/store/auth-context';
import WebsiteLogEnd from "./components/WebsiteLogEnd/WebsiteLogEnd";

{
  /*
  import WebsiteLog from "./components/WebsiteLog/WebsiteLog";
import UsersComponent from "./components/component_users/UsersComponent";

import CourseGoalList from "./components/example/style/goals01/GoalsApp";

import Expenses from "./components/expense03/Expenses/ExpensesStart";
import Expenses from "./components/expense02_state_events/Expenses/Expenses";
import Expenses from "./components/expense01/Expenses";

import Todo from "./components/example/comp/Todo";
import List0 from "./components/lists/list0/List";
import List1 from "./components/lists/list1/List";
import List2 from "./components/lists/list2/List";
import List3 from "./components/lists/list3/List";
import { FindMethod } from "./components/array/TestArray";
import { ReducerApp } from "./code/reducer/useReducer_ex";
import UsItm from "./components/UsItm";
 */
}

function App() {
  return (
    <AuthContextProvider>
    <div className="App">
      <WebsiteLogEnd />
      {/* THIS ONE IS A VALID COMMENT */}
      {/*  */}
      {/* SIMPLE JSX  
       <h1>____________________________________________</h1>
      */}

      {/* 
      <UsersComponent />
       <CourseGoalList />
     <Expenses />
      <List0 />
      <List1 />
      <List2 />
      <List3 />
     
      <FindMethod />
      <Todo text="Learn React" />
       <ExpenseItem />
      */}
    </div>
    </AuthContextProvider>
  );
}

export default App;
