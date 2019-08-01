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
  const bgColor = { background: props.isOn ? "#06d6a0" : "grey" };
  console.log(`szw bg = `, bgColor, props.isOn);

  return (
    <>
      <input className={"switch-checkbox"} id={"switch-new"} type={"checkbox"}/>
      <label className={"switch-label"} htmlFor={"switch-new"} style={bgColor}>
        <span className={"switch-span"}/>
      </label>
    </>
  );
};

