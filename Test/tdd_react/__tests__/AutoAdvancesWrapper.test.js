import React from "react";
import { AutoAdvancesWrapper } from "../src/AutoAdvancesWrapper";
import { shallow } from "enzyme";

describe("HoC AutoAdvances", () => {
  const MockComponent = () => null;
  const interval = 10e3; //10,000 (10 followed by 3 zeros)
  const Hoc = AutoAdvancesWrapper(AutoAdvancesWrapper, "index", "slides", interval);
  let wrapper;
  let incrementFunc;

  beforeEach(() => {
    jest.useFakeTimers();
    incrementFunc = jest.fn();
    wrapper = shallow(
      <Hoc indexIncrement={incrementFunc}
           slides={[1, 2, 3, 4, 5]}
      />);
  });

  test("calls the increment function after `interval`", () => {
    jest.advanceTimersByTime(interval);
    expect(incrementFunc).toBeCalledWith(5);
  });

  test("calls the increment function after every `interval`", () => {
    jest.advanceTimersByTime(interval);
    wrapper.setState({ tmp: 1 });
    jest.advanceTimersByTime(interval);
    wrapper.setState({ tmp: 2 });
    jest.advanceTimersByTime(interval);
    expect(incrementFunc).toBeCalledTimes(3);
  });

  test("resets the timer when the target prop changes", () => {
    jest.advanceTimersByTime(interval - 1000);
    wrapper.setProps({ index: 1 });
    jest.advanceTimersByTime(1000);
    expect(incrementFunc).not.toHaveBeenCalled();

    jest.advanceTimersByTime(interval);
    expect(incrementFunc).toHaveBeenCalledTimes(1);
  });

  test("clears the timer on unmount", () => {
    wrapper.unmount();
    jest.advanceTimersByTime(interval);
    expect(incrementFunc).not.toHaveBeenCalled();
  });

  test("does not set a timer if `interval` is 0", () => {
    const fn2 = jest.fn();
    const Hoc2 = AutoAdvancesWrapper(AutoAdvancesWrapper, "index", "slides", 0);
    const wrapper2 = shallow(
      <Hoc2 indexIncrement={fn2}
           slides={[1, 2, 3]}
      />);
    jest.advanceTimersByTime(9999e3);
    expect(fn2).not.toHaveBeenCalled();
  });

});
