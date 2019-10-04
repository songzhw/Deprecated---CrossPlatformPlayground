import React from "react";

interface IProps {
}

export class SetStateDemo extends React.Component<IProps> {
  state = {
    val: 0
  };

  constructor(props: IProps) {
    super(props);
  }

  componentDidMount() {
    this.setState({ val: this.state.val + 1 });
    console.log(this.state.val);    // 第 1 次 log

    this.setState({ val: this.state.val + 1 });
    console.log(this.state.val);    // 第 2 次 log

    setTimeout(() => {
      this.setState({ val: this.state.val + 1 });
      console.log(this.state.val);  // 第 3 次 log

      this.setState({ val: this.state.val + 1 });
      console.log(this.state.val);  // 第 4 次 log
    }, 0);
  }

  render() {
    return <p> What did this.setState do:  <strong>state = {this.state.val}</strong> </p>;
  }
}
// 我以为是0,0,2,2; 但结果成了0,0,2,3
