import React, { useState } from 'react'
import './App.css';

function App() {
  const [fullName, setFullName] = useState({
    fname:"",
    lname:""
  });

  const Submits = (event) =>{
    event.preventDefault();
    alert("Form Submitted");
  }

  const inputEvent = (event) =>{
    event.preventDefault();
    const val = event.target.value;
    const name = event.target.name;

    setFullName((prevVal) => {
      if (name === "fname"){
        return {
          fname:val,
          lname:prevVal.lname
        };
      }else if (name === "lname"){
        return {
          fname:prevVal.fname,
          lname:val
        }
      }
    }) 
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>Hello <span style={{color:'red'}}>{fullName.fname} {fullName.lname}</span> </h1>
        <form onSubmit={Submits}>
        <input 
          type="text"
          placeholder="Enter Your Name"
          name="fname"
          onChange={inputEvent}
          value={fullName.fname}
        />
        <br/>
        <input 
          type="text"
          placeholder="Enter Your Last Name"
          name="lname"
          onChange={inputEvent}
          value={fullName.lname}
        />
        <br/>
        <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
