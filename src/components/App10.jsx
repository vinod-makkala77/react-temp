import React, { useState, useRef, useEffect } from 'react';

export default function App10() {
  const [num, setNum] = useState(0);
  const txtRef = useRef(null);
  const numref=useRef(0);

  useEffect(() => {
    if (numref.current>num) {
      txtRef.current.style.color = 'green';
    } else {
      txtRef.current.style.color = 'red';
    }
    numref.current=num;
  }, [num]);

  return (
    <div>
      <input type="number" onChange={(e) => setNum(Number(e.target.value))} />
      <h1 ref={txtRef}>{num}</h1>
    </div>
  );
}
