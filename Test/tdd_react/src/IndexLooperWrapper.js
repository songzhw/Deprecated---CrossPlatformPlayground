import React from "react";
import index from "styled-components/dist/styled-components-macro.esm";

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
      this.setState(({ index }) => {
        const newIndex = upperBound ? (index - 1 + upperBound) % upperBound : index - 1;
        return { index: newIndex };
      });
    };

    render() {
      const indexProps = {
        [indexPropName]: this.state.index,
        [`${indexPropName}Increment`]: this.onIncrease,
        [`${indexPropName}Decrement`]: this.onDecrease
      };
      return <component {...this.props} {...indexProps} />;
    }

  }
};
