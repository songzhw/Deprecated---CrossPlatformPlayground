import React, {Component} from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'
import {connect} from 'react-redux'
import SixDrawerLayout from "../../component/drawer/SixDrawerLayout";

class MyDrawerDemoScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <SixDrawerLayout
          ref={(ref) => this.drawerLayout = ref}
          drawerWidth={240}
          renderDrawer={this.renderDrawer}>
          <View>
            <Text style={{fontSize: 88, backgroundColor: 'red'}}>Content</Text>
            <Button onPress={this.openDrawer} title="Open Drawer"/>
          </View>
        </SixDrawerLayout>
      </View>
    )
  }

  openDrawer = () => {
    this.drawerLayout.openDrawer()
  }

  renderDrawer = () => (
    <View style={styles.drawer}>
      <Text style={styles.drawItem}>Android</Text>
      <Text style={styles.drawItem}>iOS</Text>
      <Text style={styles.drawItem}>React Native</Text>
      <Text style={styles.drawItem}>Flutter</Text>
      <Text style={styles.drawItem}>Node.js</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  drawer: {
    flex: 1,
    fontSize: 33,
    backgroundColor: 'white'
  },
  drawItem: {
    fontSize: 28,
    marginTop: 20,
    marginLeft: 20,
  }
})

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(MyDrawerDemoScreen)