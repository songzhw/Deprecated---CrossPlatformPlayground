import React, {Component} from 'react'
import {View, StyleSheet, Text, Button, Image, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import DrawerLayout from "react-native-drawer-layout";
import TodayScreen from "./TodayScreen";
import {INavigationProps} from "../core/CoreProps";
import {DrawerActions, NavigationRoute, NavigationScreenProp} from "react-navigation";

class HomeScreen extends Component<INavigationProps> {
  private drawer!: DrawerLayout | null;

  render() {
    var drawer = (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={{fontSize: 60}}>I'm drawer</Text>
      </View>
    )
    return (
      <DrawerLayout
        ref={(drawer) => this.drawer = drawer}
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
    // this.drawer!.openDrawer()
    this.props.navigation.navigate('SettingsScreen')
  }

  static navigationOptions = ({navigation}) => ({
    headerTitle: "Home",
    headerLeft: (
      <TouchableOpacity onPress={() => openLeftDrawer()}>
        <Image source={require('../../assets/icon_menu.png')} resizeMode='center' style={styles.imgBack}/>
      </TouchableOpacity>
    )
  })

  static openLeftDrawer = () => {

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