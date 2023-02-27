import { useState } from "react";
import add from "../assets/img/plus.svg";
import minus from "../assets/img/minus.svg";

const Add=(props)=>{
    const [isFormVisible,setFormVisible]=useState(false);
    const toggleAddForm=(event)=>{
        event.target.style.color="red";
        const formExp=document.getElementById("addTask");
        if(isFormVisible){
            formExp.style.display="none";
            setFormVisible(!isFormVisible);
        }
        else{
            formExp.style.display="block";
            setFormVisible(!isFormVisible);
        }
    }
    return(
        <div className="container">
            <div className="container-header">
            <h2>Add a New Task</h2>
            <img src={isFormVisible ? minus : add} width={50} height={50} onClick={toggleAddForm}/>
            </div>
            <form onSubmit={props.onSubmitHandler} id="addTask">
                <label htmlFor="taskname">Task Name</label>
                <input type="text" name="taskname" placeholder="Enter Task Name"/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Add;