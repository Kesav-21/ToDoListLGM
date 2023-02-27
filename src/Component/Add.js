const Add=(props)=>{
    return(
        <div>
            <h2>Add a New Task</h2>
            <form onSubmit={props.onSubmitHandler} id="addTask">
                <label htmlFor="taskname">Task Name</label>
                <input type="text" name="taskname" placeholder="Enter Task Name"/>
                <label htmlFor="taskdesc">Task Description</label>
                <input type="text" name="taskdesc" placeholder="Enter Task Description"/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Add;