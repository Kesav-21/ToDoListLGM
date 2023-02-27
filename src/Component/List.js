import React from "react";
class List extends React.Component{
    constructor(props){
    super(props);
    this.state={
        tasks:[{id:1,tname:"Welcome",tdesc:"You can add any TO DO Things Here"},
        {id:1,tname:"Welcome",tdesc:"You can add any TO DO Things Here"}]
    }
}
render(){
    return(
        <div>
            {this.state.tasks.map(elem=>
            <div>
            <h1>{elem.id}</h1>
            <h2>{elem.tname}</h2>
            <h3>{elem.tdesc}</h3>
            <input type="button" id={elem.id} value="Mark Done"/>
            <input type="button" id={elem.id} value="Delete"/>
            </div>)}
        </div>
    )
}
}
export default List;