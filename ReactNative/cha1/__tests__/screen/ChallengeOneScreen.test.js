import React from 'react'
import {FlatList} from 'react-native'
import {shallow} from "enzyme"
import {ChallengeOneScreen as Screen, Layout, Sort} from "../../js/screen/ChallengeOneScreen";
import {SORT_AZ_ACTION, SORT_ZA_ACTION} from "../../js/redux/reduxChanllengeOne";

describe('test UI', () => {
  let wrapper
  let dispatchFun

  beforeEach(()=> {
    dispatchFun = jest.fn()
    let props = {
      dispatch: dispatchFun,
      pages: [],
      users: []
    }
    wrapper = shallow(<Screen {...props}/>)
  })

  test('FlatList exists', ()=> {
    let flatList = wrapper.find(FlatList)
    console.log(`list = ${flatList.debug()}`)
    expect(flatList.length).toBe(1)
    expect(flatList.prop('numColumns')).toBe(1)
  })


  test('FlatList -> GridView', ()=> {
    let screen = wrapper.instance()
    expect(wrapper.state('layoutIndex')).toBe(Layout.List)

    screen.clickLayout()
    expect(wrapper.state('layoutIndex')).toBe(Layout.Grid)
  })

  test('FlatList -> order', ()=> {
    let screen = wrapper.instance()
    expect(wrapper.state('sortIndex')).toBe(Sort.None)

    screen.clickSort()
    expect(dispatchFun).toBeCalledWith(SORT_AZ_ACTION)
    expect(wrapper.state('sortIndex')).toBe(Sort.AZ)
  })

})

