import React from "react";
import ReactDOM from "react-dom";

export class PreToastView extends React.Component {
  render() {
    return <div> hello world</div>;
  }
}

// tslint:disable-next-line:max-classes-per-file
export class PreToastDemo extends React.Component {

  onClick = () => {
    const container = document.createElement("div");
    document.body.appendChild(container); //也加到本组件中来. 没写在render()里, 所以这是动态添加的
    const view = ReactDOM.render(<PreToastView/>, container);
    console.log(`szw view = `, view);
  };

  render() {
    return (
      <div>
        <button onClick={this.onClick}>add element dynamically</button>
      </div>
    );
  }
}


