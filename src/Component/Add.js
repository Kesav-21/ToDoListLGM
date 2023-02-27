const Add=()=>{
    const handleClick=()=>{
        console.log("clicked");
    }
    return(
        <div>
            <h2>Add a New Task</h2>
            <form>
                <label htmlFor="taskname">Task Name</label>
                <input type="text" name="taskname" placeholder="Enter Task Name"/>
                <label htmlFor="taskdesc">Task Description</label>
                <input type="text" name="taskdesc" placeholder="Enter Task Description"/>
                <input type="submit" value="Add" onClick={handleClick}/>
            </form>
        </div>
    )
}

export default Add;