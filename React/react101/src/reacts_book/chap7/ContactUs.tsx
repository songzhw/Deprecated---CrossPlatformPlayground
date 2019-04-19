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
  function onReasonChanged(ev: React.ChangeEvent<HTMLSelectElement>) {
  }

  function onNoteChanged(ev: React.ChangeEvent<HTMLTextAreaElement>) {
  }

  return (
    <form className="form" noValidate={true}>
      <FormFiled text="name" onChange={props.onNameChanged}/>
      <FormFiled text="email" onChange={props.onEmailChanged}/>

      <div className="form-group">
        <label htmlFor="reason">Reason your need to contact us</label>
        <select id="reason" onChange={onReasonChanged}>
          <option value="Product">Production</option>
          <option value="Marketing">Marketing</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor={"notes"}>Additional notes</label>
        <textarea id="notes" onChange={onNoteChanged}/>
      </div>
    </form>
  );
};
