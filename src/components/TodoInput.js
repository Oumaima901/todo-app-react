import React, { Component } from 'react'
import shortid from 'shortid';
export default class TodoInput extends Component {
    //store the text that the user type in a text
    state ={
     text:""
    }
    //the handlechange function
    handleChange=(event)=>{
        this.setState({
            //get the event name and set that equal to the event value
            [event.target.name]: event.target.value
        })
    }
    //function to handle the submit
    handleSubmit =(event)=>{
        //it doesn't refresh
        event.preventDefault();
        //submit the form we need to create a new todo and pass it to our todo list
        //it will take 3 properties text,id,complete
        this.props.addTodo({
            id:shortid.generate(),
            text: this.state.text,
            complete: 'flase'

        });
        //after we submit we clear the input text
        this.setState({
            text:""
        });
    }
    render() {
    return (
        <div className="card card-body my-3">
            <form onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white">
                       <i className="fas fa-book"/>
                        </div>
                        </div>
                        <input name="text" type="text" value={this.state.text} onChange={this.handleChange} placeholder="add a todo item" className="form-control text-capitalize"/>
                </div>
                <button onClick={this.handleSubmit} type="submit" className="btn btn-block btn-primary mt-3">Add a Task</button>
            </form>
        </div>
    )
}


}
