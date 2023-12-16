import {useState} from "react"
export default function StateFunction(){
    const[carName,setCarName]=useState("Thar");
    const changeCarName=()=>setCarName("BMW");

    const[count,setCount]=useState(0);
    const increCount=()=>setCount(count+1);
    const decreCount=()=>setCount(count-1);
    return(
        <div>
            <h1>My car name is {carName}</h1>
            <button onClick={changeCarName}>Click me</button>
            <h1>Count {count}</h1>
            <button onClick={increCount}>Increment</button>
            <button onClick={decreCount}>Decrement</button>
        </div>
    )
}