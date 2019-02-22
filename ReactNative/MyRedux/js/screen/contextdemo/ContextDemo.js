import React from "react";
import { FamilyProvider } from "./FamilyContext";
import Child from "./ContextDemoChild";

class Provider extends React.Component {
  render() {
    return (
      <FamilyProvider value={this.props.value}>
        {this.props.children}
      </FamilyProvider>
    );
  }
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


export default () => (
  <Provider value={{ lastName: "Bing2", firstName: "Chandler2" }}>
    <Grandmother/>
  </Provider>
)


