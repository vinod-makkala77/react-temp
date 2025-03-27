import { useState } from "react";   
export default function App4(){
    const[user,setUser]=useState({});
    const[msg,setMsg]=useState("");
    const handleSubmit=()=>{
        if(user.email=="vinod@gmail.com" && user.password=="vinnu"){
            setMsg(user.email)    
        }
        else{
            setMsg("Access Denied")
        }
    }                                     
    return(

        <div>
            <h3>this is App4</h3>{msg}
            <p><input type="text" onChange={(e)=>setUser({...user,email:e.target.value})}placeholder="enter email"></input></p>
            <p><input type="password" onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="enter password"></input></p>
            <button onClick={handleSubmit}>Submit</button>
        </div>   
);
    };