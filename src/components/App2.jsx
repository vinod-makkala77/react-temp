import { useState } from "react";
export default function App(){

    const[count,setcount]=useState(0);
    const increment=()=>{
        setcount(count+1)
    }
    const decrement=()=>{
        setcount(count-1)
    }
    return (
        <div>
    <h3> this is App2</h3>
    <button onClick={increment}>+</button>
    {count}
    <button onClick={decrement}>-</button>
    </div>
    );
}