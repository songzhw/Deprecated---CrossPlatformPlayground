import React from "react";
import ReactDOM from "react-dom";
// import App from '../app/App';
//
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

type Robot = "Android";
// const robot : Robot = "ios";  // error
let robot: Robot;
robot = "Android";
// robot = null;    // error
// robot = undefined; // error


type Platform = "Android" | "iOS" | "Web"
let platform : Platform
platform  = "Android";
platform = 'iOS'
// platform = undefined  // error

