import React from "react";

interface IProps {
}

export class SetStateDemo extends React.Component<IProps> {
  state = {
    val: 0,
    count: 200,
    color: 0
  };

  constructor(props: IProps) {
    super(props);
  }

  componentDidMount() {

    this.setState({ val: this.state.val + 2 });
    console.log(this.state);

    this.setState({ count: this.state.count - 10 });
    console.log(this.state);

    this.setState({ count: this.state.count - 5, color: this.state.color + 1111 });
    console.log(this.state);

    this.setState({ val: this.state.val + 3 });
    console.log(this.state);

    this.setState({ count: this.state.count - 30 });
    console.log(this.state);

    this.setState({ val: this.state.val + 4, color: this.state.color + 2222 });
    console.log(this.state);

    setTimeout(() => {
      console.log("  ******", this.state);  //=> {val: 3, count: 170}

      this.setState({ val: this.state.val + 1 });
      console.log("  =>", this.state);

      this.setState({ count: this.state.count - 20 });
      console.log("  =>", this.state);

      this.setState({ val: this.state.val + 2 });
      console.log("  =>", this.state);

      this.setState({ count: this.state.count - 40 });
      console.log("  =>", this.state);
    }, 0);
  }

  render() {
    return <div><p/>
      <strong>value = {this.state.val}</strong><p/>
      <strong>count = {this.state.count}</strong><p/>
      <strong>color = {this.state.color}</strong>
    </div>;
  }
}
