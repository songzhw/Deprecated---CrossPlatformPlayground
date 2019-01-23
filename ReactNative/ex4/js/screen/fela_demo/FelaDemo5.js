import React, {PureComponent} from 'react'
import {View, Text, Button} from 'react-native'
import {StyleSheet} from 'fela-tools'
import {combineRules} from "fela";
import {connect as connectFela, FelaRenderer, createComponent as createFelaComponent} from 'react-fela'
import {connect as connectRedux} from "react-redux";

const size = props => ({
  color: 'blue',
  fontSize: props.num
})

const Tmp = ({txt, styles}) => (
  <Text className={styles.size}> {txt} </Text>
)

const ConnectedTmp = connectFela(size)(Tmp)


class FelaDemo5 extends PureComponent {
  render() {
    return (
      <View style={{flex: 1}}>
        <ConnectedTmp num={20}/>
      </View>
    )

  }

}

// 参数是{ navigation: {...}, theme: {...} }
const mapThemeToProps = (top) => {
  console.log(`map5 theme = ${JSON.stringify(top)}`)
  return {...top.theme}
}

const mapStateToProps = (state) => {
  return {}
}

export default connectRedux(mapStateToProps)(FelaDemo5)
