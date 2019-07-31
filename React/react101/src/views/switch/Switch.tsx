import React from "react";
import "./Swtich.css";

interface IProps {
}

export const Switch = (props: IProps) => {
  return (
    <>
      <input className={"switch-checkbox"} id={"switch-new"} type={"checkbox"}/>
      <label className={"switch-label"} htmlFor={"switch-new"}>
        <span className={"switch-button"}/>
      </label>
    </>
  );
};

