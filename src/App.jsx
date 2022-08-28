import "./App.css";
//import ImportExamples from "./components/import_examples/ImportExamples";
import { UsersList } from "./components/UsersList";
import { FindMethod } from "./components/import_examples/TestArray";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <List />
      <UsersList />
      <FindMethod />
    </div>
  );
}
{
  //<ImportExamples />
}
export default App;
