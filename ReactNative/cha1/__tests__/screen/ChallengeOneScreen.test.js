import React from 'react'
import {FlatList} from 'react-native'
import {shallow} from "enzyme"
import {ChallengeOneScreen as Screen, Layout, Sort} from "../../js/screen/ChallengeOneScreen";
import {fetchChallengeOnePage, SORT_AZ_ACTION, SORT_ZA_ACTION} from "../../js/redux/reduxChanllengeOne";

describe('test UI', () => {
  let wrapper
  let dispatchFun
  let pages = ["1", "2"]

  beforeEach(()=> {
    dispatchFun = jest.fn()
    let props = {
      dispatch: dispatchFun,
      pages: pages,
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

  test('onReachEnd, current index++', ()=> {
    let screen = wrapper.instance()
    expect(screen.currentIndex).toBe(0)

    screen.onReachEnd()
    expect(screen.currentIndex).toBe(1)
  })

  test('reach end, then send action to redux', ()=> {
    let screen = wrapper.instance()
    screen.onReachEnd()

    let action = fetchChallengeOnePage("2", 1)
    expect(dispatchFun).toBeCalledWith(action)
  })

})

