import React from 'react'
import {View, Text} from 'react-native'
import {StyleSheet} from 'fela-tools'
import {FelaRenderer} from 'react-fela'

const rules = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'red',
    padding: 20,
  }
})

const FelaDemo = () => {
  return (
    <FelaRenderer>
      {renderer => <Text style={renderer.renderRule(rules.root)}> 333 </Text>}
    </FelaRenderer>
  )
}

export default FelaDemo


// const mapStateToProps = (state) => {
//   return {}
// }
//
// export default connect(mapStateToProps)(FelaDemo)