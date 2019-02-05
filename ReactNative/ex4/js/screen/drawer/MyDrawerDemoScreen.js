import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {connect} from 'react-redux'
import SixDrawerLayout from "../../component/drawer/SixDrawerLayout";

class MyDrawerDemoScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <SixDrawerLayout
          renderDrawer={this.renderDrawer}>
          <Text style={{fontSize: 88}}>Content</Text>
        </SixDrawerLayout>
      </View>
    )
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
    width: 240,
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