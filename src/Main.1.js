import React from "react";

export function Main(props) {
  return (
    <div id="main">
      <img id="photo" src={props.photo} />
      <div id="data">
        <h1>Name: {props.name}</h1>
        <p>Age: {props.age}</p>
        <p>Hobbies:</p>
        <ul>
          {props.hobbies.map((hobby) => (
            <li>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
