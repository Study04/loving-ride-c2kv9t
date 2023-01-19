import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import defaultPhoto from "./photo.jpg";

let hobbies = ["Coding", "Reading", "Gaming"];

function Main(props) {
  return (
    <div id="main">
      <image id="photo" src={props.photo} />
      <div id="data">
        <h1>Name: {props.name}</h1>
        <p>Age: {props.age}</p>
        <p>Hobbies: {props.hobbies}</p>
        <ul>
          {props.hobbies.map((hobby) => (
            <li>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Main photo={defaultPhoto} name="Alex Cole" age={41} hobbies={hobbies} />
);
