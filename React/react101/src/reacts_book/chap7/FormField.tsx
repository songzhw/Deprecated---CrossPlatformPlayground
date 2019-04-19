import React from "react";

interface IProps {
  id: string;
  label: string;
  children: JSX.Element;
}

export const FormField: React.FC<IProps> = (props: IProps) => {
  const { id, label } = props;
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      {props.children}
    </div>
  );
};