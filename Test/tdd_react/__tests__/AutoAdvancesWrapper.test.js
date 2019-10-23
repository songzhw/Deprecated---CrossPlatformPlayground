import React from "react";
import { AutoAdvancesWrapper } from "../src/AutoAdvancesWrapper";
import { shallow } from "enzyme";

describe("HoC AutoAdvances", () => {
  const MockComponent = () => null;
  const Hoc = AutoAdvancesWrapper(AutoAdvancesWrapper, "index");
  let wrapper;
  let incrementFunc;
  const interval = 10e3; //10,000 (10 followed by 3 zeros)
  const upperBound = 5;

  beforeEach(() => {
    jest.useFakeTimers();
    incrementFunc = jest.fn();
    wrapper = shallow(
      <Hoc indexIncrement={incrementFunc}
           interval={interval} upperBound={upperBound}
      />);
  });

  test("calls the increment function after `interval`", () => {
    jest.advanceTimersByTime(interval);
    expect(incrementFunc).toBeCalledWith(upperBound);
  });

  test("clears the timer on unmount", () => {
    wrapper.unmount();
    jest.advanceTimersByTime(interval);
    expect(incrementFunc).not.toHaveBeenCalled();
  });

  test("does not set a timer if `interval` is 0", () => {
    wrapper.setProps({ interval: 0 });
    jest.advanceTimersByTime(9999e3);
    expect(incrementFunc).not.toHaveBeenCalled();
  });
});
