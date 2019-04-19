import React from "react";
import { FormLabelFiled } from "./FormLabelField";
import { FormField } from "./FormField";

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
      <FormLabelFiled text="name" onChange={props.onNameChanged}/>
      <FormLabelFiled text="email" onChange={props.onEmailChanged}/>

      <FormField id="reason" label="Reason your need to contact us">
        <select id="reason" onChange={onReasonChanged}>
          <option value="Product">Production</option>
          <option value="Marketing">Marketing</option>
          <option value="Others">Others</option>
        </select>
      </FormField>

      <FormField id="notes" label="Additional notes">
        <textarea id="notes" onChange={onNoteChanged}/>
      </FormField>
    </form>
  );
};
