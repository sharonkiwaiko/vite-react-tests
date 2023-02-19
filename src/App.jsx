import "./App.css";

import List0 from "./components/list0/List";
import List1 from "./components/list1/List";
import List2 from "./components/list2/List";
import List3 from "./components/list3/List";

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

      <List0 />
      <List1 />
      <List2 />
      <List3 />

      {/* 

     
        
     
      <ReducerApp />
      <FindMethod />
 
      */}
    </div>
  );
}

export default App;
