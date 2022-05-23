import axios from 'axios'
import React from 'react'
import './input.css'
import { useState } from 'react'
export const Input = (props) => {
    const [todo,setTodo] = useState("") 
    const handleChange= (e)=>{
        setTodo(e.target.value)
    }
    const handleSubmit = ()=>{
        axios.post('  http://localhost:8080/tasks', {
            "text": todo,
            "done": false,
            "count":0
        })
        setTodo("")
        props.count()
    }
    

  return (
    <div>
        <input className = "input"type="text" placeholder='Enter A task...' onChange={handleChange}/>
        <button className='button' onClick={()=>{handleSubmit()}}>+</button>
    </div>
  )
}
