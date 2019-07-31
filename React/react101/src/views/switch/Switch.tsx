import React from "react";
import "./Swtich.css";

interface IViewProps {
  onToggle: () => void
}

const defaultProps = {
  isOn: false as boolean
};

type IProps = IViewProps & Partial<Readonly<typeof defaultProps>>;

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

