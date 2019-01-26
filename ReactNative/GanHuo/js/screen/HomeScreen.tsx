import React, {Component} from 'react'
import {View, StyleSheet, Text, Button, Image, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import DrawerLayout from "react-native-drawer-layout";
import TodayScreen from "./TodayScreen";
import {INavigationProps, IReduxProps} from "../core/CoreProps";
import {Header, NavigationScreenConfig, NavigationStackScreenOptions} from "react-navigation";
import {requestToday} from "../redux/reduxGanHuo";

interface Props extends IReduxProps, INavigationProps {
}

class HomeScreen extends Component<Props> {
  private drawer!: DrawerLayout | null;

  isDrawerOpen = false

  componentWillMount() {
    // fetch today's ganhuo
    this.props.dispatch(requestToday())

    // register hamburger menu click event to the static navigationOptions
    let headerLeftComponent = (
      <TouchableOpacity onPress={() => this.toggleLeftDrawer()}>
        <Image source={require('../../assets/icon_menu.png')} resizeMode='center'
               style={{width: Header.HEIGHT, height: Header.HEIGHT,}}/>
      </TouchableOpacity>
    )
    this.props.navigation.setParams({headerLeftComponent})
  }


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
    this.props.navigation.navigate('SettingsScreen')
  }

  toggleLeftDrawer = () => {
    if (this.isDrawerOpen) {
      this.drawer!.closeDrawer()
    } else {
      this.drawer!.openDrawer()
    }
    this.isDrawerOpen = !this.isDrawerOpen
  }

  static navigationOptions: NavigationScreenConfig<NavigationStackScreenOptions> = ({navigation}) => {
    // need this "||{}", notherwise it will crash at the first place
    let params = navigation.state.params || {}

    return {
      headerTitle: "Home",
      headerLeft: params.headerLeftComponent
    }
  }


}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

const mapStateToProps = (state: any) => {
  console.log(`szw mapper = ${JSON.stringify(state)}`)
  return {

  }
}

export default connect(mapStateToProps)(HomeScreen)