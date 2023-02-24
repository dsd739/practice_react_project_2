import React, { Component } from "react";

export class loader extends Component {
  render() {
    return (
      <div className="center">
        <div className="ring"></div>
        <span>Loading...</span>
      </div>
    );
  }
}

export default loader;
