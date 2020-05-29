import React from "react";

interface IProps {
}

export const UseMemo1 = (props: IProps) => {
  const str1 = "{} === {}"
  const str2 = "()=>{} === ()=>{}"
  const b2 = (()=>{}) === (()=>{});
  return (
    <div>
      <p>[] === [] : ({ ([] === []).toString()})</p>
      <p> {str1} : ({ ({} === {}).toString()})</p>
      <p> {str2} : ({b2.toString()})</p>
    </div>
  );
};