import React from "react";
import Add from "./Add";


class List extends React.Component{
    constructor(props){
    super(props);
    this.state={
        tasks:[],
        id:0
    }
    this.onSubmitHandler=this.onSubmitHandler.bind(this);
}

onSubmitHandler(event){
    console.log(event.target.elements[0].value);
    console.log(this.state.tasks);
    const addlist=this.state.tasks.concat({id:this.state.id,tname:event.target.elements[0].value,tdesc:event.target.elements[1].value});
    this.setState({tasks:addlist});
    this.setState({id:this.state.id+1});
    event.preventDefault();
}

render(){
    return(
        <div>
            <Add onSubmitHandler={this.onSubmitHandler}/>
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