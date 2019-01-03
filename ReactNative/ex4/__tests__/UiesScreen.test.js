import renderer from 'react-test-renderer'
import React from 'react'
import UiesScreen from "../js/screen/UiesScreen";
import {shallow} from "enzyme";

describe('test Ui Screen', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(<UiesScreen/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('second', () => {
    const tree = setup(0)
    expect(tree.instance().props.title).toBe('san')
  })


  function setup(num) {
    let _press = () => num++
    const tree = shallow(<UiesScreen title="san" imageName={null} onPress={_press}/>)
    return tree
  }

  test('three', ()=>{
    let num = 0
    let _press = () => num++
    const tree = shallow(<UiesScreen title="san" imageName={null} onPress={_press}/>)

    tree.simulate('press')
    expect(num).toBe(1)
  })
})