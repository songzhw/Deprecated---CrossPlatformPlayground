import React, { Component } from "react";

interface IState {
  num: string;
}

export class CountScreen extends Component<{}, IState> {
  public state = { num: "*" };

  public render() {
    const { num } = this.state;
    const isSupportIndexDb = self.indexedDB ? "support" : "no support"; // window.indexedDB也行
    return (
      <div>
        <p> AdminScreen : indexdb? = {isSupportIndexDb} </p>
        <p> num = {num} </p>
        <input type="text" onChange={this.onSave}/>
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

