import React, { Component } from "react";
import "./jumbotorn.css";
class Jumbotorn extends Component {
  state = {};
  render() {
    return (
      <div role="main" className="container">
        <div className="jumbotron">
          <h1>Simple To-DO App</h1>
          <p className="lead">
            This app is built with React.js library. Learned how to lift up
            state, javascript es6 functions like map and filter arrays. This app
            also uses npm package called validator to validate user input and
            bootstrap validation classes to display input errors
          </p>
          <a
            className="btn btn-md btn-primary"
            href="../../components/navbar/"
            role="button"
          >
            View Source Code
          </a>
        </div>
      </div>
    );
  }
}

export default Jumbotorn;
