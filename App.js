import React from "react";
// import ReactDOM from 'react-dom';   //it shows warning   You are importing createRoot from "react-dom" which is not supported
// so we do as follows
import ReactDOM from "react-dom/client";    //it works fine


// <h1 id = "title">Hello world</h1>
/* "h1", {
        id = "title",
        className = "Class",
        style = {}
    }
    "Namaste React using React"
    */
const head2 = React.createElement("h1", {}, "Namaste React using react from parcel");
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(head2);

const heading = document.createElement("h2");
heading.innerHTML = "Namaste React using JavaScript";
const root = document.getElementById("root");
root.appendChild(heading);
