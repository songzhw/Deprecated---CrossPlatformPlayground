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
    console.log(this.state.val);

    this.setState({ val: this.state.val + 2 });
    console.log(this.state.val);

    this.setState({ val: this.state.val + 3 });
    console.log(this.state.val);

    this.setState({ val: this.state.val + 2 });
    console.log(this.state.val);

    setTimeout(() => {
      this.setState({ val: this.state.val + 5 });
      console.log(this.state.val);

      this.setState({ val: this.state.val + 4 });
      console.log(this.state.val);
    }, 0);
  }

  render() {
    return <p><strong>state = {this.state.val}</strong></p>;
  }
}
