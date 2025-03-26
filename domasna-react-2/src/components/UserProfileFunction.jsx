import React from "react";
import { Component } from "react";
import './UserProfileFunction.css'


const UserProfileFunction = ({ name, age, hobby }) => {
  return (
    
    <div className="card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Hobby: {hobby}</p>
    </div>
  );
};

export default UserProfileFunction;
