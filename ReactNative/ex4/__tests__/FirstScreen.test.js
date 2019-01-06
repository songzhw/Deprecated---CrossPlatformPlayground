import React from 'react'
import {Text, FlatList, Image} from 'react-native'
import FirstScreen from "../js/screen/FirstScreen"
import {shallow} from "enzyme"
import configMockStore from 'redux-mock-store'
import {Provider} from "react-redux";
import {TRY_FIRST_PAGE_INFO, tryFirstPageInfo} from "../js/redux/actionFirst";

describe('Test Redux + Screen', ()=> {
  let initState = {reducerFirst: {opened: []}}
  let mockStore = configMockStore()
  let wrapper, store

  beforeEach(()=> {
    store = mockStore(initState)
    wrapper = shallow(<Provider store={store}><FirstScreen/></Provider>)
  })

  test('check has one <FlatList/> child', ()=> {
    expect(wrapper.find(FirstScreen).length).toBe(1)
  })

  test('check props is correct', () => {
    store.dispatch(tryFirstPageInfo())
    let action = store.getActions()
    expect(action[0].type).toBe(TRY_FIRST_PAGE_INFO)
  })
})
