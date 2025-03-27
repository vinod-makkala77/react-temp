import Child1 from "./Child1"
import Child2 from "./Child2"
export default function Main(props){

   if(props.c=="a"){
    return <Child1/>
   }else{
    return <Child2/>
   }
}