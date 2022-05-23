import React, { useState } from "react";
import './App.css'
import { Tasks } from "./components/Tasks/Tasks";
import {Input} from './components/Input/Input'
function App() {
  const [length,setLength]= useState(0)
  function chnageLength() {
    setLength(length+1)
  }
  return<div className="container">
       <Input count = {chnageLength}/> 
       <Tasks changes = {length}/>
       </div>;
}

export default App;
