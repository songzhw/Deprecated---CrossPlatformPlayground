import React from "react";

interface IProps {
  name: string;
  email: string;
  note: string;
  onNameChanged: (name: string) => void;
  onEmailChanged: (email: string) => void;
  onNoteChanged: (note: string) => void;
}

export const ContactUs: React.FC<IProps> = (props: IProps) => {
  function onNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.onNameChanged(e.currentTarget.value);
  }

  return (
    <form className="form" noValidate={true}>
      <div className="form-group">
        <label htmlFor='name'>Your name</label>
        <input type="text" id="name" value={props.name} onChange={onNameChange}/>
      </div>
    </form>
  );
};