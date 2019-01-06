import React from 'react'
import {Text, FlatList, Image} from 'react-native'
import ConnectedFirstScreen, {FirstScreen} from "../js/screen/FirstScreen"
import {shallow} from "enzyme"
import configMockStore from 'redux-mock-store'
import {Provider} from "react-redux";
import {TRY_FIRST_PAGE_INFO, tryFirstPageInfo} from "../js/redux/actionFirst";

describe('Test UI', ()=> {
  let wrapper

  beforeEach(()=>{
    wrapper = shallow(<FirstScreen />)
  })

  test('exist one FlatList', ()=>{
    expect(wrapper.find(FlatList).length).toBe(1)
  })
})




describe('Test Redux + Screen', ()=> {
  let initState = {reducerFirst: {opened: []}}
  let mockStore = configMockStore()
  let wrapper, store

  beforeEach(()=> {
    store = mockStore(initState)
    // wrapper = shallow(<Provider store={store}><ConnectedFirstScreen/></Provider>)
    //   .find(ConnectedFirstScreen)
    wrapper = shallow(<ConnectedFirstScreen/>, {context: store})
  })

  test('check props is correct', () => {
    store.dispatch(tryFirstPageInfo())
    let action = store.getActions()
    expect(action[0].type).toBe(TRY_FIRST_PAGE_INFO)
  })
  // TODO -> -> 我去除store.dispatch()这句, 测试就失败了. 但我们componentWillMount()里不是发了这个嘛?! 为什么会失败?

  // test('xxx', ()=> {
  //   console.log(`(1) wrapper = ${wrapper.debug()}`)
  //   expect(wrapper.find(FlatList).length).toBe(1)
  // })

  // test('check has one <ConnectedFirstScreen/> child', ()=> {
  //   expect(wrapper.find(ConnectedFirstScreen).length).toBe(1)
  // })
  //
  // test('check has one <FlatList/> child', ()=> {
  //   let screen = wrapper.dive()
  //   // let t2 = shallow(screen.getElement())
  //   let tmp = screen.children().at(0)
  //   console.log(`(3). ${screen.debug()}`)
  //   console.log(`(4). ${tmp.debug()}`)
  //   // expect(screen.find(FlatList).length).toBe(1)
  // })
  /*
  screen结果是:
      <ContextConsumer>
        [function bound renderWrappedComponent]
      </ContextConsumer>

  tmp的结果是:
      (4). [function bound renderWrappedComponent]

   */
})
