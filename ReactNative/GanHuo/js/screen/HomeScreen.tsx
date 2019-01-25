import React, {Component} from 'react'
import {View, StyleSheet, Text, Button, Image} from 'react-native'
import {connect} from 'react-redux'
import DrawerLayout from "react-native-drawer-layout";
import TodayScreen from "./TodayScreen";

class HomeScreen extends Component {
  private drawer!: DrawerLayout | null;

  render() {
    var drawer = (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={{fontSize: 60}}>I'm drawer</Text>
      </View>
    )
    return (
      <DrawerLayout
        ref={(drawer) => this.drawer = drawer }
        drawerPosition="left"
        renderNavigationView={() => drawer}
        drawerWidth={250}
        keyboardDismissMode="on-drag"
      >
        <Button title="HomeScreen Screen" onPress={this.pressOne}/>
        <TodayScreen/>
      </DrawerLayout>
    )
  }

  pressOne = () => {
    this.drawer!.openDrawer()
  }

  static navigationOptions = {
    headerTitle: "Home"
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

export default HomeScreen
// const mapStateToProps = (state: any) => {
//   return {
//
//   }
// }
//
// export default connect(mapStateToProps)(HomeScreen)