import React from 'react'
import {Text, FlatList, Image} from 'react-native'
import FirstScreen from "../js/screen/FirstScreen"
import {shallow} from "enzyme"

test('xx', () => {
  expect(1 + 2).toBe(3)
})

test('check has one <FlatList/> child', ()=> {
  const wrapper = shallow(<FirstScreen/>)
  console.log(`FirstScreen ${wrapper.debug()}`)
  expect(wrapper.find(FlatList).length).toBe(1)
})