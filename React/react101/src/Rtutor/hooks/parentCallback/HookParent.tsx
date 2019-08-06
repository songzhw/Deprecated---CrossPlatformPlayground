import React, { useEffect, useState } from "react";

// export const HookParent = () => {
//   const [id, setId] = useState(-1);
//
//   function childCalls() {
//     console.log(`child click button`);
//   }
//
//   function updateMe() {
//     setId(new Date().getTime());
//   }
//
//   return (
//     <div>
//       <HookChild callback={childCalls}/>
//       <p/>
//       <button onClick={updateMe}> Update Parent : {id}</button>
//     </div>
//   );
// };

export class HookParent extends React.Component {
  state = {
    id: -1
  };

  childCalls = () => {
    console.log(`child click button: ${this.state.id}`);
  };

  updateMe = () => {
    this.setState({ id: new Date().getTime() });
  };

  render() {
    return (
      <div>
        <Child callback={this.childCalls}/>
        <p/>
        <button onClick={this.updateMe}> Update Parent : {this.state.id}</button>
      </div>
    );
  }
}


interface IProps {
  callback: () => void;
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
  useEffect(() => console.log(`callback changes`), [props.callback]);
  console.log(`child re-render (child is FC)`);

  return (
    <div>
      <button onClick={props.callback}> child</button>
    </div>
  );
};
const Child = React.memo(HookChild);
