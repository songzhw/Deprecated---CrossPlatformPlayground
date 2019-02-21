import React from "react";
import { Text } from "react-native";
import { FamilyConsumer, FamilyProvider } from "./FamilyContext";

export class Grandmother extends React.Component {
  state = {
    lastName: "Galler",
    firstName: "Ross"
  };

  render() {
    return (
      <FamilyProvider value={this.state}>
        <Mother/>
      </FamilyProvider>
    );
  }
}

class Mother extends React.Component{
  render(){
    let OuterComponent = connect(Child)
    return <OuterComponent/>
  }
}


class Child extends React.Component {
  render() {
    return (
      <Text style={{ fontSize: 22 }}>{this.props.name}</Text>
    );
  }
}

function connect(InnerComponent) {
  return class Outer extends React.Component {
    render() {
      let getText = (context) => `${context.firstName}  -  ${context.lastName}`;
      return (
        <FamilyConsumer>
          {context => <InnerComponent name={getText(context)}/>}
        </FamilyConsumer>
      );
    }
  };
}

/*
// FamilyConsumer uses a render prop to expose the context object to its children
const Child = () => {
  let text = (context) => `${context.firstName}_${context.lastName}`
  return (
    <FamilyConsumer>
      {context => <Text> {text(context)} </Text>}
    </FamilyConsumer>
  );
};
*/

export default () => (
  <Grandmother/>
)


