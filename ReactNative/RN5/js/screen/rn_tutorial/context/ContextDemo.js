import React from "react";
import {Text} from 'react-native'
import {FamilyConsumer, FamilyProvider} from "./FamilyContext";

export class Grandmother extends React.Component {
  state = {
    lastName: "Galler",
    firstName: "Ross"
  };

  componentWillMount() {
    super.componentDidMount();
    console.log(`szw Grandmother cwm() `)
  }

  render() {
    return (
      <FamilyProvider value={this.state}>
        <Mother/>
      </FamilyProvider>
    );
  }
}

const Mother = () => {
  return <Child/>;
};

// FamilyConsumer uses a render prop to expose the context object to its children
const Child = () => {
  let text = (context) => `${context.firstName}_${context.lastName}`
  return (
    <FamilyConsumer>
      {context => <Text> {text(context)} </Text>}
    </FamilyConsumer>
  );
};

export default () => (
  <Grandmother/>
)

