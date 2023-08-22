import { Component } from "react";
import { useState } from "react";
import "./App.css";
import { MdDelete } from "react-icons/md";
import  { Count } from "src/components/Count.jsx";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      inValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.setState((state) => ({
      ...state,
      inValue: e.target.value,
    }));
  }
  handleClick(e) {
    e.preventDefault();
    this.setState((state) => ({
      task: state.task.concat(state.inValue),
      inValue: "",
    }));
  }
  handleDelete(index) {
    this.setState((state) => ({
      task: state.task.filter((task, i) => i !== index),
    }));
  }

  render() {
    return (
      <div>
        <h3>Todo list</h3>
        <Count />
        <label htmlFor="task-entry">Enter Task: </label>
        <input
          type="text"
          name="task-entry"
          value={this.state.inValue}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>submit</button>
        <ul>
          {this.state.task.map((task, index) => (
            <li key={index}>
              {task}{" "}
              <button className="dlt" onClick={() => this.handleDelete(index)}>
                <MdDelete />
              </button>{" "}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
