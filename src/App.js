import React, { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

const container = {
  boxShadow: "#00000063 0px 0px 6px 0px",
  padding: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin:"15px"
};

function App() {
  const [count, setCount] = useState(0); 
  const [nbClick , setNbClick] = useState(0) ;
  const [isShown , setIsShown] = useState(true)

  const inc = (val) =>{ 
    setCount(count + val) ;
    setNbClick(nbClick + 1 )
  
  };
  const dec = (val) => {
    if (count > 0) {
      setCount(count - val);
      
    }
    setNbClick(nbClick + 1 )

  };

  return (
    <div>
      <div style={container}>
    <h2>{ `You clicked ${nbClick} times `  }</h2>
    <button 
    onClick={()=> setNbClick(0)}
    className="my-btn reset"  >Reset</button>
    </div>
    <button 
    onClick={()=> setIsShown(!isShown)}
    >{isShown ? "Hide" : "Display"} counter</button>
   { isShown ?
  ( <div style={container}>
    <Counter c = {count} increment={inc} decrement={dec} />
    </div>  ) : null
    }
    </div>
  );
}

export default App;
