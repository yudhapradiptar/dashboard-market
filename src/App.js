import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./containers/Dashboard";
import DateRangeContextProvider from "./context/DateRangeContext";

function App() {
  return (
    <DateRangeContextProvider>
      <div className="App">
        <Navbar />
        <Sidebar />
        <Dashboard />
      </div>
    </DateRangeContextProvider>
  );
}

export default App;
