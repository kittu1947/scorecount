import React from "react";


const Todolist =({todolist,delethandler})=>{
    return(
        <div>
            {todolist.map((todo,index)=>
                <div key={index}>{todo}&nbsp;&nbsp;<button onClick={()=>delethandler(index)}>DELETE</button></div>)}
        </div>
    )
}

export default Todolist;