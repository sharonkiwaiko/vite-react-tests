import "./App.css";
import ImportExamples from "./components/import_examples/ImportExamples";

import List from "./components/List";

function App() {
  return (
    <div className="App">
      <List />
      <ImportExamples />
      <UsersList />
    </div>
  );
}

export default App;
