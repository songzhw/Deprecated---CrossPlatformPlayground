import React from "react";
import { Carousel } from "./ts/Carousel";
import { slides } from "./ts/data";

export function App() {
  return (
    <Carousel slides={slides}/>
  );
}

