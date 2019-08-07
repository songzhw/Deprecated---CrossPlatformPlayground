import React, { useState } from "react";

const UnnecessaryRender3 = () => {
  const target = {
    count: 1
  };
  const [value, setValue] = useState({ count: 0 });

  function clicks() {
    setValue(target);
  }

  console.log(`parent re-render: value = `, value);
  return (
    <div>
      <Child3Memorized count={value.count}/>
      <button onClick={clicks}>Click Me</button>
    </div>
  );
};

interface IProps {
  count: number
}

const Child3 = (props: IProps) => {
  console.log(`child re-render`);
  return (
    <>
      <p>{props.count ? props.count + "" : "empty"}</p>
    </>
  );
};
const Child3Memorized = React.memo(Child3);

export default UnnecessaryRender3;