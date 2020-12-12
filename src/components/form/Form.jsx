import React, { Component } from "react";
import "./form.css";

class Form extends Component {
  render() {
    return (
      <form className="todoForm">
        {/* <div className="col-md-5"> */}
        <div className="input-group">
          <input
            type="text"
            className={
              this.props.inputErrors
                ? "form-control is-invalid inputToDo"
                : "form-control inputToDo"
            }
            id="autoSizingInputGroup"
            placeholder="Enter a to do item"
            name="toDoItem"
            value={this.props.toDo}
            onChange={this.props.onChange}
          />
          <button
            className="btn btn-warning btnAddAndRemove"
            onClick={this.props.handleAdd}
          >
            +
          </button>
        </div>
        <div className="invalid-feedback d-block">{this.props.inputErrors}</div>
        {/* </div> */}
      </form>
    );
  }
}

export default Form;
