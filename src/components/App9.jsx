import React from "react";
import { useState, useRef } from "react";
export default function App9() {
  const [color, setColor] = useState();
  const txtRef = useRef();
  const handleSubmit = () => {
    txtRef.current.style.color = color
  }
  return (
    <div>
      <h3>This is App9</h3>
      <input type="text" onChange={(e) => setColor(e.target.value)}></input>
      <button onClick={handleSubmit}>Submit</button>
      <h2 ref={txtRef}>Hello World</h2>
      
    </div>
  );
}