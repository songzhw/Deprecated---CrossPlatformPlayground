import React from "react";
import { Carousel } from "./ts/Carousel";
import { slides } from "./ts/data";

function App() {
  return (
    <Carousel slides={slides}/>
  );
}

export default App;
