import React from "react";

// [预期] 点击button三次, 但后两次不刷新组件, 因为count仍是为1, 没有变化啊
// [分析] 结果当然不如我们所想, 我们赋值的this.setState({count: 1}), 括号里的可是每次都是一个新对象

interface IProps {
}

interface IState {
  count: number
}

class UnnecessaryRender1 extends React.Component<IProps, IState> {
  state = { count: 0 };

  getSnapshotBeforeUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>): any | null {
    console.log(`getSnapshotBeforeUpdate`);
    return null;
  }

  componentDidUpdate(prevProps: IProps, prevState: IState) {
    console.log("componentDidUpdate");
  }

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={() => this.setState({ count: 1 })}>Click Me</button>
      </div>
    );
  }
}


export default UnnecessaryRender1;