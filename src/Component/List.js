import React from "react";
import Add from "./Add";
import tick from '../assets/img/tick.svg';

class List extends React.Component{
    constructor(props){
    super(props);
    this.state={
        tasks:[],
        id:0
    }
    this.onSubmitHandler=this.onSubmitHandler.bind(this);
    this.markDoneHandler=this.markDoneHandler.bind(this);
    this.deleteHandler=this.deleteHandler.bind(this);
}

onSubmitHandler(event){
    const addlist=this.state.tasks.concat({id:this.state.id,tname:event.target.elements[0].value,tdesc:event.target.elements[1].value});
    this.setState({tasks:addlist});
    this.setState({id:this.state.id+1});
    event.preventDefault();
}

markDoneHandler(event){
    console.log(event.target);
    event.target.classList.toggle("striking");
}

deleteHandler(event){
    const lists=this.state.tasks.filter(item=>item.id!==parseInt(event.target.id));
    this.setState({tasks:lists});
}

render(){
    return(
        <div>
            <Add onSubmitHandler={this.onSubmitHandler}/>
            {this.state.tasks.map(elem=>
            <div key={elem.id} className="listItem" >
            <p onClick={this.markDoneHandler}><img id="tick" src={tick} height={50} width={50}/>{elem.tname}</p>
            <input type="button" id={elem.id} value="Delete" onClick={this.deleteHandler}/>
            </div>)}
        </div>
    )
}
}
export default List;