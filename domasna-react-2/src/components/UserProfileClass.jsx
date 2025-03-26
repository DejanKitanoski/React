import React from "react";
import { Component } from "react";


class UserProfileClass extends Component {
  render() {
    const { name, age, hobby } = this.props;
    return (
      <div className="card">
        <h2>{name}</h2>
        
        <p>Age: {age}</p>
        
        <p>Hobby: {hobby}</p>
        
      </div>
    );
  }
}

export default UserProfileClass;
