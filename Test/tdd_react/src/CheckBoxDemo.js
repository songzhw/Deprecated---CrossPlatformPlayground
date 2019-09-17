import React, { useState } from "react";


export class CheckBoxDemo extends React.Component {
  state = {
    isOn: false
  };

  onChange() {
    this.setState(({ isOn }) => ({ isOn: !isOn }));
  }

  render() {
    return (
      <div>
        <input type="checkbox" onChange={this.onChange}/>
      </div>
    );
  }
};
