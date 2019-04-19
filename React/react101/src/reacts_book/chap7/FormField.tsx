import React from "react";

interface IProps {
  text: string;
  onChange: (value: string) => void;
}

export const FormFiled: React.FC<IProps> = (props: IProps) => {
  const { text, onChange } = props;

  function onFiledChangee(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.currentTarget.value);
  }

  return (
    <div className="form-group">
      <label htmlFor='text'>Your {text}</label>
      <input type="text" id={text} onChange={onFiledChangee}/>
    </div>
  );
};