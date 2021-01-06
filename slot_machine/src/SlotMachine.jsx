import React from "react"

const SlotMachine = (props) =>{
    // let x = "z0";
    // let y = "x";
    // let z = "x";
  
    if ((props.x===props.y) && (props.y===props.z)){
      return <>
      <div className="slot_inner">
        <h1>{props.x}{props.y}{props.z}</h1>
        <h1>This is matching</h1>
      </div>
      </>
    }else{
      return <>
      <div className="slot_inner">
        <h1>{props.x}{props.y}{props.z}</h1>
        <h1>This is Not matching</h1>
      </div>
      </>
    }
  
  }

  export default SlotMachine;