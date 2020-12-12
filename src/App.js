import React, { Component } from "react";
import validator from "validator";
import Navbar from "./components/navbar/Navbar.jsx";
import Jumbotorn from "./components/jumbotorn/jumbotorn";
import Form from "./components/form/Form";
import ToDoList from "./components/toDoList/ToDoList";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDo: "",
      toDos: [],
      toDoInputErr: null
    };
  }

  //const
  timeStamp = Date.now();

  //functions
  handleAdd = e => {
    e.preventDefault();

    //Validating
    if (validator.isEmpty(this.state.toDo)) {
      this.setState({ toDoInputErr: "Please enter an item" });
    } else {
      this.setState({ toDoInputErr: null, toDo: "" });
      //Setting id
      const id =
        this.state.toDos.length === 0
          ? 1
          : this.state.toDos[this.state.toDos.length - 1].id + 1;
      this.setState({
        toDos: [
          ...this.state.toDos,
          { toDo: this.state.toDo, id: id, completed: false }
        ]
      });
    }
  };

  //Onchange
  onChange = e => {
    this.setState({ toDo: e.target.value });
  };

  //Handle completed
  handleCompleted = e => {
    const id = e.currentTarget.getAttribute("id");
    console.log("clicked id is ", id);
    let toDoObject;
    this.state.toDos.map(toDo => {
      if (toDo.id == id) {
        toDoObject = toDo;
      }
      console.log(" to do object " + toDoObject);
    });

    const indexOfToDoObject = this.state.toDos.indexOf(toDoObject);
    console.log("Index of to do object " + indexOfToDoObject);
    let copyOfCompletedToDo = this.state.toDos[indexOfToDoObject];
    copyOfCompletedToDo.completed = !this.state.toDos[indexOfToDoObject]
      .completed;
    console.log(copyOfCompletedToDo);
    const newToDoList = [...this.state.toDos];
    newToDoList.splice(indexOfToDoObject, 1, copyOfCompletedToDo);
    this.setState({ toDos: newToDoList });
  };

  //Handle edit
  handleEdit = () => {
    console.log("Editing .. ");
  };

  //Handle Delte
  handleRemove = e => {
    const id = e.currentTarget.getAttribute("id");
    this.setState({
      toDos: this.state.toDos.filter(toDo => toDo.id != id)
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotorn />

        <div className=" col-md-5 mx-auto">
          <Form
            handleAdd={this.handleAdd}
            onChange={this.onChange}
            inputErrors={this.state.toDoInputErr}
            toDo={this.state.toDo}
          />
          <ToDoList
            toDos={this.state.toDos}
            handleCompleted={this.handleCompleted}
            handleEdit={this.handleEdit}
            handleRemove={this.handleRemove}
          />
        </div>
      </div>
    );
  }
}

export default App;
