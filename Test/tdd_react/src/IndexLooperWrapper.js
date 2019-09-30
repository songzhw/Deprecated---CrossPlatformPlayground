import React from "react";

export const IndexLooperWrapper = (component, indexPropName) => {
  class ComponentWithIndex extends React.PureComponent {
    static displayName = `IndexLooperWrapper(${component.displayName || component.name})`;

    state = { index: 0 };

    onIncrease = upperBound => {
      this.setState(({ index }) => {
        const newIndex = upperBound ? (index + 1) % upperBound : index + 1;
        return { index: newIndex };
      });
    };

    onDecrease = upperBound => {

    };
  }
};
