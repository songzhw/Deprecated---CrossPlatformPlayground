import React from "react";
import { FormFiled } from "./FormField";

interface IProps {
  name: string;
  email: string;
  note: string;
  onNameChanged: (name: string) => void;
  onEmailChanged: (email: string) => void;
  onNoteChanged: (note: string) => void;
}

export const ContactUs: React.FC<IProps> = (props: IProps) => {
  function onNameChange(value: string) {
    props.onNameChanged(value);
  }

  function onEmailChange(value: string) {
    props.onEmailChanged(value);
  }

  return (
    <form className="form" noValidate={true}>
      <FormFiled text="name" onChange={onNameChange}/>
      <FormFiled text="email" onChange={onEmailChange}/>
    </form>
  );
};
