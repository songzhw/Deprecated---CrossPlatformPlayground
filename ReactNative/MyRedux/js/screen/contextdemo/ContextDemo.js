import React from "react";
import { Text } from "react-native";
import { FamilyConsumer, FamilyProvider } from "./FamilyContext";
import Child from './ContextDemoChild'

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
    return <Child/>
  }
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


