import './App.css';
import Navbar from './components/Navbar';
import TajImage from './components/Taj';
import Palace from './components/palace';

function App() {
  return (
    <div>
      {/* Navbar component */}
      <Navbar />
      {/* Taj Mahal Component */}
      <TajImage/>
      {/* Mysroe Palace Component */}
      <Palace/>
    </div>
  );
}

export default App;
