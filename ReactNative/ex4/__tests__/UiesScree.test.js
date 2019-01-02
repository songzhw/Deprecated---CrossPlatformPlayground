import renderer from 'react-test-renderer'
import React from 'react'
import UiesScreen from "../js/screen/UiesScreen"; // 不然在<View>里报错, 说React is not defined

test('four buttons', () => {
  const tree = renderer
    .create(<UiesScreen/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})