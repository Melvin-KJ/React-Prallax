import './App.css';

import Navbar from './components/Navbar';
import TajImage from './components/Taj';
import Palace from './components/palace';
import QutubMinar from './components/Qutub.jsx';

import Textbox1 from './components/Textbox1';
import Textbox2 from './components/Textbox2';
import Textbox3 from './components/Textbox3';
import Textbox4 from './components/Textbox4';
import GoldenTemple from './components/Temple.jsx';

function App() {
  return (
    <div>
      {/* Navbar component */}
      <Navbar />
      {/* Taj Mahal Component */}
      <TajImage/>
      <Textbox1/>
      {/* Mysroe Palace Component */}
      <Palace/>
      <Textbox2/>
      {/* Golden Temple */}
      <GoldenTemple/>
      <Textbox3/>
      {/* Qutub Minar */}
      <QutubMinar/>
      <Textbox4/>
    </div>
  );
}

export default App;
