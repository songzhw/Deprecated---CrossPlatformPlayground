import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {connect} from 'react-redux'
import SixDrawerLayout from "../../component/drawer/SixDrawerLayout";

class MyDrawerDemoScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <SixDrawerLayout
          renderDrawer={this.renderDrawer}
        >
          <Text style={{fontSize: 88}}>Content</Text>
        </SixDrawerLayout>
      </View>
    )
  }

  renderDrawer = () => (
    <Text style={styles.drawer}>Drawer</Text>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  drawer: {
    fontSize: 33,
    width: 150,
  }
})

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(MyDrawerDemoScreen)