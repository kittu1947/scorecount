import React, {useState,useEffect } from 'react';
import "./App.css";


const App =()=>
{
  const[count,setCount]=useState(0);
  useEffect(()=>console.log("clicked",[count]))
  return(
    <center>
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>SOCRE COUNT</button>
    </div></center>
  )

}
export default App;