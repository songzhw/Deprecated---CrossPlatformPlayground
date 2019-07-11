import React from "react";

// try swap the button
export class CounterClass2 extends React.Component {
  public state = { count: 0 };

  public componentDidMount() {
    const num = this.state.count;
    setTimeout(() => {
      console.log(`componentDidMount() count：${num}`);
    }, 3000);
  }

  public componentDidUpdate() {
    const num = this.state.count;
    setTimeout(() => {
      console.log(`componentDidUpdate() count：${num}`);
    }, 3000);
  }

  public render() {
    return (
      <div>
        <p>{this.state.count}</p>
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
    点击 3 次
    </button>
    </div>
  );
  }
}


