import React, { Component } from "react";


class ClassInput extends Component{
    constructor(props) {
        super(props);
        this.state = {
            task : [],
            inValue : "",

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange (e) {
        this.setState((state) => ({
            ...state,
            inValue: e.target.value ,
        }));

    }
    handleClick (e) {
        e.preventDefault();
        this.setState((state) =>({
            task : state.task.concat(state.inValue),
            inValue : "",
        })
        )
    }


    render(){
        return (
            <div>
                <h3>Todo list</h3>
                <label htmlFor="task-entry">Enter Task: </label>
                <input type="text" 
                name="task-entry"
                value={this.state.inValue}
                onChange={this.handleChange}  />
                <button  onClick={this.handleClick}>submit</button>
                <ul>
                    {this.state.task.map((task, index) => (
                        <li key={index}>{task} <button>-</button> </li>
                    )) }
                </ul>

                
            </div>
        )
        
        
    }
}
export default ClassInput;