import Rect, {useState} from "react";
import './App.css';

const App = () => {
  let purple = "purple";

  const [fclick, setFclick] = useState("yellow")

  const firstClick = () => {
    setFclick("grey");
  }

  const secondClick = () => {
    setFclick(purple);
  }

  return (
    <>
    <div className="App" style={{ backgroundColor:fclick}}>
      {/* <button onClick={firstClick} onDoubleClick={secondClick}>Click Me</button> */}
      <button onMouseEnter={firstClick} onMouseLeave={secondClick}>Click Me</button>
    </div>
    </>
  );
}

export default App;
