import "./App.css";
import { SimpleItem } from "./components/SimpleItem";
import List from "./components/List";
import { UsersList01 } from "./components/UsersList01";
import { UsersList02 } from "./components/UsersList02";

import { FindMethod } from "./components/import_examples/TestArray";

//import { ReducerApp } from "./code/reducer/useReducer_ex";
//import UsItm from "./components/UsItm";
function App() {
  return (
    <div className="App">
      {/* THIS ONE IS A VALID COMMENT */}
      {/* SIMPLE JSX 
       <h1>____________________________________________</h1>
      */}

      {/*
      SimpleItem COMPONENT 
      import { SimpleItem } from "./components/SimpleItem";
      ....export const SimpleItem = () => {....

         <SimpleItem />
         
      */}

      <List />
      <UsersList01 />
      <UsersList02 />
      {/* 

     
        
     
      <ReducerApp />
      <FindMethod />
 
      */}
    </div>
  );
}

export default App;
