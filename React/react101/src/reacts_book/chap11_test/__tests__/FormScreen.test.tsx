import React from "react";
import ReactDOM from "react-dom";
import { FormScreen } from "../FormScreen";
import { Simulate } from "react-dom/test-utils";
import { render, fireEvent, cleanup } from "react-testing-library";
import { work } from "../Worker";

jest.mock("../Worker");

describe("FormScreen other tests", () => {

  afterEach(cleanup)

  test("pass in a onClick props, and click button2, this passed function should be call", () => {
    const fn = jest.fn();
    const { getAllByText, getByText } = render(<FormScreen onClick={fn}/>);

    const button2 = getByText("Work Num2 (props.onClick)");
    fireEvent.click(button2);

    // expect(fn).not.toBeCalled();  // failed
    expect(fn).toBeCalled();
  });

  test("click button3, expect work() starts to work", () => {
    // @ts-ignore
    work.mockReturnThis();

    const fn = jest.fn();
    const { getAllByText, getByText } = render(<FormScreen onClick={fn}/>);

    const button3 = getByText("Work Num3 (outsider worker)");
    fireEvent.click(button3);

    expect(work).toBeCalledWith("num3");
  });


});
