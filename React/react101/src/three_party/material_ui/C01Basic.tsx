import React from "react";
import Button from "@material-ui/core/Button";

interface IProps {
}

export const C01Basic = (props: IProps) => {

  const clickMe = () => {
    console.log(`szw click me`);
  };

  return (
    <div>
      {/*variant有三种可选值: text(边框都没有), outlined(只有边框), container(实心)*/}
      <Button variant="contained" color="primary" onClick={clickMe}>Click Me</Button>
    </div>
  );
};

