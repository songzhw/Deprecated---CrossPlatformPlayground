import React, { useState } from "react";
import { wait } from "./utils";

export const FormScreen = () => {
  const [name, setName] = useState("");

  function onNameChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setName(ev.currentTarget.value);
  }

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>): Promise<string> {
    ev.preventDefault();
    await wait(1500);
    return name;
  }

  return (
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
  );
};
