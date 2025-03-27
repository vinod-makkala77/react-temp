import React from 'react'
import Main from './Main'
import { useState } from 'react';
export default function App12(){
    const[result,setResult]=useState();
    return(
        <div>
        <h1>App12</h1>
        <button onClick={()=>setResult("a")}>a</button>
        <button onClick={()=>setResult("b")}>b</button>
        <Main c={result}/>
        </div>
    );
}