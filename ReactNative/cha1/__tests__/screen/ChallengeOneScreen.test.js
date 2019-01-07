import React from 'react'
import {FlatList} from 'react-native'
import {shallow} from "enzyme"
import {ChallengeOneScreen as Screen} from "../../js/screen/ChallengeOneScreen";

describe('test UI', () => {
  let wrapper
  let dispatchFun

  beforeEach(()=> {
    dispatchFun = jest.fn()
    let props = {
      dispatch: dispatchFun
    }
    wrapper = shallow(<Screen {...props}/>)
  })

  test('FlatList exists', ()=> {
    expect(wrapper.find(FlatList).length).toBe(1)
  })


})

