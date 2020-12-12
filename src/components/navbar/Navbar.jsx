import React, { Component } from "react";
import "./navbar.css";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">
          My Portfolio
        </a>
        <div className="float-right">v</div>
      </nav>
    );
  }
}

export default Navbar;
