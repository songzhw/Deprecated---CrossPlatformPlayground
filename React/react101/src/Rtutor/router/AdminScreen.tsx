import React, { Component } from "react";

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
        <button onClick={this.onSave23}>Save 23</button>
        <button onClick={this.onSave10}>Save 10</button>
        <button onClick={this.onGet}>Get</button>
      </div>
    );
  }

  public onSave23 = () => {
    localStorage.setItem("hellokey", "23");
  };


  public onSave10 = () => {
    localStorage.setItem("hellokey", "10");
  };

  public onGet = () => {
    const num = localStorage.getItem("hellokey")!;
    this.setState({ num });
  };

}

