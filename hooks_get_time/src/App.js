import { useState } from 'react';
import './App.css';

function App() {
  let newTime =  new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(newTime);

  const getTime = () => {
    newTime =  new Date().toLocaleTimeString();
    setCurrentTime(newTime);
  }

  return (
    <div className="App">
      <h1>Time <span style={{color: 'grey'}}>{currentTime}</span></h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
