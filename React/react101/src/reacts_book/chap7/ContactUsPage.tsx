import React, { useState } from "react";
import { ContactUs } from "./ContactUs";

interface IProps {

}

interface IState {
  name: string;
  email: string;
  note: string;
}

export const ContactUsPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  function onNameChanged(value: string) {
    console.log(`szw name = ${value}`);
    setName(value);
  }

  function onEmailChanged(value: string) {
    console.log(`szw email = ${value}`);
    setEmail(value);
  }

  function onSubmit(result: Promise<string[]>) {
    result.then(value => console.log(value));
  }

  function onNoteChanged(value: string) {
    setNote(value);
  }

  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <p>call us if you have questions</p>
      <ContactUs name={name} email={email} note={note}
                 onNameChanged={onNameChanged}
                 onEmailChanged={onEmailChanged}
                 onNoteChanged={onNoteChanged}
                 onSubmit={onSubmit}/>
    </div>
  );
};