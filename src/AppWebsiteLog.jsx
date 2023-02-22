import "./App.css";
import { AuthContextProvider } from "./components/WebsiteLogEnd/store/auth-context";
import WebsiteLogEnd from "./components/WebsiteLogEnd/WebsiteLogEnd";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <WebsiteLogEnd />
      </div>
    </AuthContextProvider>
  );
}

export default App;
