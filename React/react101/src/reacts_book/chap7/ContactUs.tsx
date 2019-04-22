import React from "react";
import { FormLabelFiled } from "./FormLabelField";
import { FormField } from "./FormField";

interface ISubmitResult {
  isSuccess: boolean;
  errors?: string;
}

interface IProps {
  name: string;
  email: string;
  note: string;
  // reason: string;
  onNameChanged: (name: string) => void;
  onEmailChanged: (email: string) => void;
  // onReasonChanged: (note: string) => void;
  onNoteChanged: (note: string) => void;
  onSubmit: (promise: Promise<string[]>) => void
}

export const ContactUs: React.FC<IProps> = (props: IProps) => {
  function onReasonChanged(ev: React.ChangeEvent<HTMLSelectElement>) {
    console.log(`szw reason = ${ev.currentTarget.value}`);
  }

  function onNoteChanged(ev: React.ChangeEvent<HTMLTextAreaElement>) {
    console.log(`szw note = ${ev.currentTarget.value}`);
  }

  function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault(); // to stop the browser automatically posting the form
    const promise = Promise.resolve(["reason", "note"])
    props.onSubmit(promise)
  }

  return (
    <form className="form" noValidate={true} onSubmit={onSubmit}>
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

      <div className="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};