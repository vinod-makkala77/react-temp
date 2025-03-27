import { useNavigate } from "react-router-dom"

export default function App11(){
    const navigate=useNavigate();
    const navi=()=>{
        navigate("/App5")
    }
    return(
        <div>
            <button onClick={navi}>Goto App5</button>
        </div>
    );
       
}