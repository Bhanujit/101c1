import React from 'react'
import './tasks.css'
import { useState,useEffect } from 'react'
import axios from 'axios'

export const Tasks = (props) => {
    let [data,setData]=useState([])
    async function getData(){
       let res = await fetch("http://localhost:8080/tasks")
       .then((d)=>d.json())
       setData(res)
    }
    useEffect(()=>{
      getData()
    },[props.changes])
    function counter(a){
        // data.count+a
        // axios.put(`http://localhost:8080/tasks${a}`)
    }
  return (
    <div>
     <div>
         {data.map((e)=>{
             return (<h3 className="tasks" key={e.id}>
                 <div><input type="checkBox" /></div>
                 {e.text} 
                 <button onClick={(item)=>{
                     counter(item.key)
                 }}>-</button>
                 <p>{e.count}</p> 
                 <button onClick={(item)=>{
                    counter(item.key)
                }}>+</button>
                 </h3>)
         })}
     </div>
    </div>
  )
}
