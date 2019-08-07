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

const UnnecessaryRender5 = () => {
  const original = {
    book: {
      id: 1,
      name: { main: "harry", sub: "potter4" },
      isRead: false
    }
  };
  const target = {
    book: {
      id: 1,
      name: { main: "harry", sub: "potter4" },
      isRead: true
    }
  };
  const [value, setValue] = useState(original);

  function clicks() {
    setValue(target);
  }

  console.log(`parent re-render: value = `, value);
  return (
    <div>
      <Child5Memorized item={value}/>
      <button onClick={clicks}>Click Me</button>
    </div>
  );
};

interface IProps {
  item: IState;
}

const Child5 = (props: IProps) => {
  console.log(`child re-render`);
  return (
    <>
      <p>{props ? JSON.stringify(props) : "empty"}</p>
    </>
  );
};
const Child5Memorized = React.memo(Child5, (prevProps, nextProps) => {
  // 第二参返回true, 就不会更新Child5
  return prevProps.item.book.id === nextProps.item.book.id &&
    prevProps.item.book.isRead === nextProps.item.book.isRead &&
    prevProps.item.book.name.main === nextProps.item.book.name.main &&
    prevProps.item.book.name.sub === nextProps.item.book.name.sub;
});

export default UnnecessaryRender5;