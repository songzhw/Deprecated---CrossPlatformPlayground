import React, { useState } from "react";
import { wait } from "./utils";
import { work } from "./Worker";

interface IProps {
  onClick?: (text: string) => void;
}

export const FormScreen = (props: IProps) => {
  const [name, setName] = useState("");

  function onNameChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setName(ev.currentTarget.value);
  }

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    await wait(1500);
  }

  function onClick2(ev: React.MouseEvent<HTMLButtonElement>) {
    if (props.onClick) {
      props.onClick(name);
    }
  }

  function onClick3(ev: React.MouseEvent<HTMLButtonElement>) {
    work("num3");
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor='name'>Your name</label>
          <input type="text" id="name"/>
          <input type="text" id="name" onChange={onNameChange}/>
        </div>

        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>

      <button className="button2" onClick={onClick2}>Work Num2 (props.onClick)</button>
      <button className="button2" onClick={onClick3}>Work Num3 (outsider worker)</button>

    </div>
  );
};
