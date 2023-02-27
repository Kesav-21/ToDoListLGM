const Add=()=>{
    return(
        <div>
            <h2>Add a New Task</h2>
            <form>
                <label htmlFor="taskname">Task Name</label>
                <input type="text" name="taskname" placeholder="Enter Task Name"/>
                <label htmlFor="taskdesc">Task Description</label>
                <input type="text" name="taskdesc" placeholder="Enter Task Description"/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}

export default Add;