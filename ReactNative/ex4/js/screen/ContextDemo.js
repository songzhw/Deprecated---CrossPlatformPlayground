import React from "react";
import {Text} from 'react-native'
import {FamilyConsumer, FamilyProvider} from "../core/context/FamilyContext";

export class Grandmother extends React.Component {
  state = {
    lastName: "Song"
  };

  render() {
    return (
      // We wrap all of the components that need access to the lastName property in FamilyProvider.
      <FamilyProvider value={this.state.lastName}>
        <Mother/>
      </FamilyProvider>
    );
  }
}

const Mother = () => {
  return <Child/>;
};

const Child = () => {
  // We wrap the component that actaully needs access to
  // the lastName property in FamilyConsumer
  return <FamilyConsumer>{context => <Text>{context}</Text>}</FamilyConsumer>;
};

export default () => (
  <Grandmother/>
)


// import React, { Component } from 'react'
// import { View, StyleSheet, Text } from 'react-native'
// import {connect} from 'react-redux'
//
// class ContextDemo extends Component{
//   render(){
//     return (
//       <View style={styles.root}>
//         <Text>ContextDemo Screen</Text>
//       </View>
//     )
//   }
// }
//
// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//   },
// })
//
// const mapStateToProps = (state) => {
//   return {
//
//   }
// }
//
// export default connect(mapStateToProps)(ContextDemo)