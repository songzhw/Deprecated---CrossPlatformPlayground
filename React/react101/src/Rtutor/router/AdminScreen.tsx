import React, { ChangeEvent, Component } from "react";

interface IState {
  num: string;
}

export class AdminScreen extends Component<{}, IState> {
  public state = { num: "*" };

  public render() {
    const {num} = this.state;
    return (
      <div>
        <p> AdminScreen </p>
        <p> num = {num} </p>
        <input value={num} type="text" onChange={this.onSave}/>
        <button onClick={this.onGet}>Get number</button>
      </div>
    );
  }

  public onSave = (event: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("hellokey", event.target.value);
  };

  public onGet = () => {
    const num = localStorage.getItem("hellokey")!;
    this.setState({ num });
  };

}

