import React, {PureComponent} from 'react'
import {View, Text, Button} from 'react-native'
import {StyleSheet} from 'fela-tools'
import {FelaRenderer} from 'react-fela'

const rules = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  firstText: {
    fontSize: 24
  }
})

class FelaDemo extends PureComponent {

  render() {
    let style = (renderer, styleItem) => {
      return renderer.renderRule(styleItem)
    }

    return (
      <FelaRenderer>
        {renderer =>
          <View style={style(renderer, rules.root)}>
            <Text style={style(renderer, rules.firstText)}> {this.state.num} </Text>
          </View>
        }
      </FelaRenderer>
    )
  }

}

export default FelaDemo


// const mapStateToProps = (state) => {
//   return {}
// }
//
// export default connect(mapStateToProps)(FelaDemo)