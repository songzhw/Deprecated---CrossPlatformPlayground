import * as React from "react";
import * as ReactDOM from "react-dom";
import { Carousel } from "./Carousel";
import { slides } from "./data";


const container = document.createElement("div");
document.body.appendChild(container);

ReactDOM.render(
  <Carousel slides={slides}/>,
  container
);