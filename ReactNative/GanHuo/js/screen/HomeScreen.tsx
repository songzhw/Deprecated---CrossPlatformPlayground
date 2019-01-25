import React, {Component} from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'
import {connect} from 'react-redux'
import DrawerLayout from "react-native-drawer-layout";

class HomeScreen extends Component {
  private drawer!: DrawerLayout | null;

  render() {
    var drawer = (
      <View>
        <Text style={{fontSize:60, color: 'red'}}>I'm drawer</Text>
      </View>
    )
    return (
      <DrawerLayout
        ref={(drawer) => {return this.drawer = drawer}}
        drawerPosition="left"
        renderNavigationView={()=> drawer}
      >
        <Button title="HomeScreen Screen" onPress={this.pressOne}/>

      </DrawerLayout>
    )
  }

  pressOne = ()=>{
    this.drawer!.openDrawer()
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