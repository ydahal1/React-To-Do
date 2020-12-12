import React, { Component } from "react";
import "./toDoList.css";

class ToDoList extends Component {
  render() {
    //Destructuring
    const listOfTodos = this.props.toDos.map(toDo => {
      return (
        <div className="toDosLists" key={toDo.id} test="100">
          <div className="input-group">
            <div
              type="text"
              className={
                toDo.completed
                  ? "form-control form-control-completed"
                  : "form-control"
              }
              id="autoSizingInputGroup"
            >
              {toDo.toDo}
            </div>
            <button
              id={toDo.id}
              className="btn btn-success btnAddAndRemove"
              onClick={this.props.handleCompleted}
            >
              <i className="fa fa-check-square"></i>
            </button>

            <button
              id={toDo.id}
              className="btn btn-danger btnAddAndRemove"
              onClick={this.props.handleRemove}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
      );
    });
    return listOfTodos;
  }
}

export default ToDoList;
