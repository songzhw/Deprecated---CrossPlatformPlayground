import React from "react";
import { FamilyProvider } from "./FamilyContext";
import Child from "./ContextDemoChild";

function provider(value, InnerComponent) {
  return class Outer extends React.Component {
    render() {
      return (
        <FamilyProvider value={value}>
          <InnerComponent/>
        </FamilyProvider>
      );
    }
  };
}

class Grandmother extends React.Component {
  render() {
    return (
      <Mother/>
    );
  }
}

class Mother extends React.Component {
  render() {
    return <Child/>;
  }
}


export default provider({ lastName: "Bing", firstName: "Chandler" }, Grandmother);


