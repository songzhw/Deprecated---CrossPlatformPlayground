import React, { useState } from "react";

// 实锤: React.memo()只浅比较props哦!
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

/*
book: {
      id: 1,
      name: { main: "harry", sub: "potter4" },
      isRead: false
    }
 */
const UnnecessaryRender2 = () => {
  const target = {
    count: 1
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


export default React.memo(UnnecessaryRender2);