import React from 'react'

export default function Object() {
    const college=[{id:1,stuName:"Harini",age:26},
                    {id:2,stuName:"Anu",age:15},
                    {id:3,stuName:"Uma",age:30}]
    const disply=college.map((col)=><li key={col.id}>{col.stuName}:{col.age}</li>)
  return (
    <div>
        <h3>List of Students</h3>
        <ul type="circle">
            {disply}
        </ul>
    </div>
  )
}
