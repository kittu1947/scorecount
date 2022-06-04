import React,{useState} from "react";
import Todolist from "./Todolist";

const Todo =()=>{
const [task,setTask]=useState("");
const [todos,setTodos]=useState([]);

  const changehandler =e=>{
  setTask(e.target.value)
}

  const submithandler=e=>{
    e.preventDefault();
    const newtodos=[...todos,task];
    setTodos(newtodos)
    setTask("");
  }
  const deletehandler=(indexvalue)=>{
  const newtodos=todos.filter((todos,index)=>
  index!==indexvalue)
setTodos(newtodos);
}
  return(
    <div>
      <center>
      <h4>TODO MANAGER</h4>
      <form onSubmit={submithandler}>
        <input type="text"  value={task} onChange={changehandler} /> &nbsp;&nbsp;
        <input type="submit" value="ADD" name="ADD"/>   
      </form>
    <Todolist todolist={todos} delethandler={deletehandler}/>
      
      </center>
    </div>
  )
}
export default Todo;