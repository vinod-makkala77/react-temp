import { useState } from "react";   
export default function App3(){
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[msg,setMsg]=useState();
    const handleSubmit=()=>{
        if(email=="vinod@gmail.com" && password=="vinnu"){
            setMsg("Welcome Vinod")

        }else{
            setMsg("Access Denied")
        }
    }
    return (
        <div>
            <h3>this is App3</h3>
           {msg} 
            <p><input type='text' onChange={(e)=>setEmail(e.target.value)} placeholder="Email Addess"></input></p>
            <p><input type='password'onChange={(e)=>setPassword(e.target.value)} placeholder="Password"></input></p>
            <p><button onClick={handleSubmit}>submit</button></p>
        </div>
    );
};