import React, {useState} from 'react'
import './App.css';

function App() {
  const [name, setName] = useState();

  const [lastName, setLastName] = useState();

  const [subName, setSubName] = useState();

  const [subLastName, setSubLastName] = useState();

  const Submits = (event) => {
    event.preventDefault();
    setSubName(name);
    setSubLastName(lastName);

  }

  const inputEvent = (event) => {
    setName(event.target.value);
  }

  const inputEventtwo = (event) => {
    setLastName(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Hello {name} {lastName} </h1> */}
        <h1>Hello <span style={{color:'red'}}>{subName} {subLastName}</span> </h1>
        <form onSubmit={Submits}>
        <input 
          type="text"
          placeholder="Enter Your Name"
          onChange={inputEvent}
          value={name}
        />
        <br/>
        <input 
          type="text"
          placeholder="Enter Your Last Name"
          onChange={inputEventtwo}
          value={lastName}
        />
        <br/>
        <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
