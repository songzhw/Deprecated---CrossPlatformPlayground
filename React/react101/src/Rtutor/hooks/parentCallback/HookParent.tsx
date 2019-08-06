import React, { useCallback, useEffect, useRef, useState } from "react";

export const HookParent = () => {
  const [id, setId] = useState(-1);

  // parent中更新id, 但这并不涉及child. 所以理想状态就是点击这后, child并不re-render
  function updateMe() {
    setId(new Date().getTime());
  }

  function childCalls(num: number) {
    console.log(`child click button:`, num);
  }

  const callbackMemorized = useCallback(childCalls, []);

  return (
    <div>
      <Child callback={callbackMemorized}/>
      <p/>
      <button onClick={updateMe}> Update Parent : {id}</button>
    </div>
  );
};


interface IProps {
  callback: (num: number) => void;
}

// class HookChild extends React.PureComponent<IProps> {
//   render() {
//     console.log(`child re-render (child is class)`);
//     return (
//       <div>
//         <button onClick={this.props.callback}> child</button>
//       </div>
//     );
//   }
// }

const HookChild = (props: IProps) => {

  useEffect(() => console.log(`child callback changes`), [props.callback]);
  console.log(`child re-render`);

  const clickChild = () => {
    const random = Math.floor(Math.random() * 100);
    props.callback(random);
  };

  return (
    <div>
      <button onClick={clickChild}> child</button>
    </div>
  );
};
const Child = React.memo(HookChild);
