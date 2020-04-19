import React, { useState } from "react";

interface IProps {}

export const KeyImportancePage = (props: IProps) => {
  const [data, setData] = useState(["one", "two", "three", "four"]);

  const onRemoveOne = () => {
    setData(["one", "three", "four"]);
  };

  return (
    <div>
      <button onClick={onRemoveOne}>remove two</button>
      <ul>
        {data.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ul>
    </div>
  );
};

