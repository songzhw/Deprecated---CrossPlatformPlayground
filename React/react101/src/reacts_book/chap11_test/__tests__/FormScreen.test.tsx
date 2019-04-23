import React from "react";
import ReactDOM from "react-dom";
import { FormScreen } from "../FormScreen";
import { Simulate } from "react-dom/test-utils";
import { work } from "../Worker";
import { render, fireEvent } from "react-testing-library";

// describe("FormScreen form tests", () => {
//   test("01", () => {
//
//   });
// });


describe("FormScreen other tests", () => {
  test("pass in a onClick props, and click button2, this passed function should be call", () => {
    const fn = jest.fn();
    const { getAllByText, getByText } = render(<FormScreen onClick={fn}/>);

    const button2 = getByText("Work Num2");
    fireEvent.click(button2);

    // expect(fn).not.toBeCalled();  // failed
    expect(fn).toBeCalled();


  });
});
