import React, { useState } from "react";


interface IState {
  book: {
    id: number;
    name: {
      main: string;
      sub: string;
    };
    isRead: boolean;
  }
}

const UnnecessaryRender2 = () => {
  const target = {
    book: {
      id: 1,
      name: { main: "harry", sub: "potter4" },
      isRead: false
    }
  };
  const [value, setValue] = useState();

  function clicks() {
    setValue(target);
  }

  console.log(`component re-render`);
  return (
    <div>
      <p>{value ? JSON.stringify(value) : "(empty)"}</p>
      <button onClick={clicks}>Click Me</button>
    </div>
  );
};


export default UnnecessaryRender2;