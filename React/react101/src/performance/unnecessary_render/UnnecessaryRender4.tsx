import React, { useMemo, useState } from "react";

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

const target = {
  count: 1
};

const UnnecessaryRender4 = () => {
  const [value, setValue] = useState({count:0});

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


export default useMemo(() => <UnnecessaryRender4/>, [target]);
