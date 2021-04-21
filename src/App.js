import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './containers/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
