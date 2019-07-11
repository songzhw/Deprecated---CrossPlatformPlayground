import React from "react";

// try swap the button
export class CounterClass extends React.Component {
  public state = { count: 0 };

  public componentDidMount() {
    setTimeout(() => {
      console.log(`componentDidMount() count：${this.state.count}`);
    }, 3000);
  }

  public componentDidUpdate() {
    setTimeout(() => {
      console.log(`componentDidUpdate() count：${this.state.count}`);
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


