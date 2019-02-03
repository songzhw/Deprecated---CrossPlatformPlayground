import React, {Component} from 'react'
import {View, StyleSheet, Text, Button, Image, TouchableOpacity, FlatList} from 'react-native'
import {connect} from 'react-redux'
import DrawerLayout from "react-native-drawer-layout";
import TodayScreen from "./TodayScreen";
import {INavigationProps, IReduxProps} from "../core/CoreProps";
import {Header, NavigationScreenConfig, NavigationStackScreenOptions} from "react-navigation";
import {extractTodayData, requestToday} from "../redux/reduxGanHuo";
import {commonStyles} from "../core/styles/CommonStyles";

interface Props extends IReduxProps, INavigationProps {
  payload: any[]
}

class HomeScreen extends Component<Props> {
  private drawer!: DrawerLayout | null;

  isDrawerOpen = false

  componentWillMount() {
    this.props.dispatch(requestToday())

    let headerLeftComponent = (
      <TouchableOpacity onPress={() => this.toggleLeftDrawer()}>
        <Image source={require('../../assets/icon_menu.png')} resizeMode='center'
               style={commonStyles.imgBack}/>
      </TouchableOpacity>
    )
    this.props.navigation.setParams({headerLeftComponent})
  }


  render() {
    var drawer = this.renderDrawer()
    // @ts-ignore
    return (
      <DrawerLayout
        ref={(drawer) => this.drawer = drawer}
        drawerPosition="left"
        renderNavigationView={() => drawer}
        drawerWidth={250}
        keyboardDismissMode="on-drag"
      >

        <TodayScreen navigation={this.props.navigation} data={this.props.payload}/>

      </DrawerLayout>
    )
  }

  renderDrawer = () => {
    var data = [
      {
        icon: require('../../assets/category_android.png'),
        name: "Android",
      },
      {
        icon: require('../../assets/category_ios.png'),
        name: "iOS",
      },
      {
        icon: require('../../assets/category_app.png'),
        name: "App",
      },
      {
        icon: require('../../assets/category_js.png'),
        name: "前端",
      },
      {
        icon: require('../../assets/category_beauty.png'),
        name: "福利",
      }
    ]

    return (
      <FlatList
        style={{backgroundColor: 'white', width: 250}}
        data={data}
        keyExtractor={(item, index) => `${item.name}`}
        renderItem={this.renderDrawerItem}
      />
    )
  }

  renderDrawerItem = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.drawerItemRoot} onPress={() => this.onPressDrawerItem(item.name)}>
        <Image source={item.icon} style={styles.drawerItemIcon}/>
        <Text style={styles.drawerItemText}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  private onPressDrawerItem(name: string) {
    this.drawer!.closeDrawer()
    this.props.navigation.navigate('CategoryDetailScreen', {name: name})
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
  drawerItemRoot: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center'
  },
  drawerItemIcon: {
    width: 30,
    height: 30,
    marginLeft: 15
  },
  drawerItemText: {
    fontSize: 20,
    color: '#1e1e1e',
    marginLeft: 30,
  }
})

const mapStateToProps = (state: any) => {
  console.log(`szw mapper = ${JSON.stringify(state)}`)
  let {results} = state.reducerGanHuo
  let ret = extractTodayData(results)
  return {payload: ret}
}

export default connect(mapStateToProps)(HomeScreen)