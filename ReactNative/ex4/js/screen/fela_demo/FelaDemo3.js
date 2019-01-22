import React, {PureComponent} from 'react'
import {View, Text, Button} from 'react-native'
import {StyleSheet} from 'fela-tools'
import {combineRules} from "fela";
import {connect as connectFela, FelaRenderer, createComponent as createFelaComponent} from 'react-fela'
import {connect as connectRedux} from "react-redux";

const rules = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  size: props => ({
    color: 'blue',
    fontSize: props.num
  }) // props只是名字, 其值也可以是component的state. 它其实来自于renderRule()的第二参.
})

class FelaDemo3 extends PureComponent {
  state = {
    id: 100,
    num: 18
  }

  render() {
    // this.props是 { navigation: {...}, styles: {..}, rules: {...} }. "styles" within it have theme data
    console.log(`szw render3 = ${JSON.stringify(this.props)}`)

    let RootView = createFelaComponent(rules.root, View)

    return (
      <FelaRenderer>
        {renderer => {
          let sizeIncreaseRule = renderer.renderRule(rules.size, {num: this.state.num})
          let rulesForText = combineRules(sizeIncreaseRule, this.props.styles.basicText)
          let TextForNum = createFelaComponent(rulesForText, Text)
          return (
            <RootView>
              <TextForNum>
                {this.state.num}
              </TextForNum>
              <Button title="+ 1" onPress={this.onPlusOne}/>
            </RootView>
          )
        }
        }
      </FelaRenderer>
    )
  }

  onPlusOne = () => {
    this.setState({num: this.state.num + 6})
  }
}


// 参数是{ navigation: {...}, theme: {...} }
const mapThemeToProps = (top) => {
  console.log(`map3 theme3 = ${JSON.stringify(top)}`)
  return {...top.theme}
}

const mapStateToProps = (state) => {
  return {}
}

export default connectRedux(mapStateToProps)(
  connectFela(mapThemeToProps)(FelaDemo3)
)