import "./App.css";
import { SimpleItem } from "./components/SimpleItem";
import List from "./components/List";
import { UsersList } from "./components/UsersList";

import ImportExamples from "./components/import_examples/ImportExamples";

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
      <UsersList />
      <ImportExamples />
      {/* 

     
        
     
      <ReducerApp />
      <FindMethod />
 
      */}
    </div>
  );
}

export default App;
