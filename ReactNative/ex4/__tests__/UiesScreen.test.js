import renderer from 'react-test-renderer'
import React from 'react'
import {Text} from 'react-native'
import UiesScreen from "../js/screen/UiesScreen";
import {shallow} from "enzyme";

describe('test Ui Screen', () => {
  test('check has one <Text/> child', ()=> {
    const tree = shallow(<UiesScreen/>)
    console.log(`2nd = ${JSON.stringify(tree.find(Text))}`) //=> {}
    expect(tree.find(Text).length).toBe(1)
  })

  test('check text in screen', () => {
    const tree = shallow(<UiesScreen title="san" imageName={null} onPress={null}/>)
    expect(tree.instance().props.title).toBe('san')
  })

  test('check the click event: approach 1', ()=>{
    let num = 0
    let _press = () => num++
    const tree = shallow(<UiesScreen title="san" imageName={null} onPress={_press}/>)

    tree.simulate('press')
    expect(num).toBe(1)
  })

  test('check the click event: approach 2', ()=>{
    let _press = jest.fn()
    const tree = shallow(<UiesScreen title="san" imageName={null} onPress={_press}/>)

    tree.simulate('press')
    expect(_press).toBeCalled()
  })

  test('check set state/props methods', ()=>{
    let _press = jest.fn()
    const tree = shallow(<UiesScreen/>)
    tree.setProps({title: "23", imageName: null, onPress: _press})
    let textView = tree.find(Text).getElement()  //=> {"key":null,"ref":null,"props":{"children":"23"},"_owner":null,"_store":{}}
    expect(textView.props.children).toBe('23')
  })
})