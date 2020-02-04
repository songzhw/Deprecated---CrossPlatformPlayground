import React from "react";

export class ToastLayoutDemo extends React.Component {
  state = { queue: ["one", "two", "three"] };

  render() {
    return (
      <div>
        <div>{"one"}</div>
        <div>{"one"}</div>
        <div>{"one"}</div>
      </div>
    );
  }
}


/*
<div>
  {"one"}
  {"second"}
  {"three"}
</div>
 */




/*
// tslint:disable-next-line:max-classes-per-file
class ToastLayoutItem extends React.Component {
  render() {
    return (
      <div>
        {"one"}
      </div>
    )
  }
}
*/
