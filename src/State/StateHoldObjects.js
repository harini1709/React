import React,{useState} from "react"
export default function StateHoldObject(){
    const[college,setCollege]=useState({cid:1,cname:"SKCT",year:2023})
    const changeCollege=()=>{
        setCollege((PrevState)=>{return{...PrevState,cname:"SKCET"}})
    }
    return(
        <div>
            <h1>College ID is {college.cid}</h1>
            <h1>College name is {college.cname}</h1>
            <h1>Year is {college.year}</h1>
            <button onClick={changeCollege}>Click</button>
        </div>
    )
}