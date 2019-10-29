import React from "react";

export const IndexLooperWrapper = (InComponent, indexPropName) =>
  class ComponentWithIndex extends React.PureComponent {

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
      return <InComponent {...this.props} {...indexProps} />;
    }

  };


