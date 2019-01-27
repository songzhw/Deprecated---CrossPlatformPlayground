import React, {Component} from 'react'
import {View, StyleSheet, Text, Button, Image, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import DrawerLayout from "react-native-drawer-layout";
import TodayScreen from "./TodayScreen";
import {INavigationProps, IReduxProps} from "../core/CoreProps";
import {Header, NavigationScreenConfig, NavigationStackScreenOptions} from "react-navigation";
import {requestToday} from "../redux/reduxGanHuo";
import {commonStyles} from "../core/styles/CommonStyles";

interface Props extends IReduxProps, INavigationProps {
}

class HomeScreen extends Component<Props> {
  private drawer!: DrawerLayout | null;

  isDrawerOpen = false

  componentWillMount() {
    let headerLeftComponent = (
      <TouchableOpacity onPress={() => this.toggleLeftDrawer()}>
        <Image source={require('../../assets/icon_menu.png')} resizeMode='center'
               style={commonStyles.imgBack}/>
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
    // @ts-ignore
    return (
      <DrawerLayout
        ref={(drawer) => this.drawer = drawer}
        drawerPosition="left"
        renderNavigationView={() => drawer}
        drawerWidth={250}
        keyboardDismissMode="on-drag"
      >
        <TodayScreen navigation={this.props.navigation}/>
      </DrawerLayout>
    )
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

export default HomeScreen