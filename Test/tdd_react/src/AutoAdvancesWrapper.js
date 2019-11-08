import React from "react";

export const AutoAdvancesWrapper = (InComponent, advancePropName, upperPropName, interval) =>
  class ComponentWithAutoAdvance extends React.PureComponent {

    componentDidMount() {
      this.startTimer();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      // 第一次加载时不走componentDidUpdate
      this.startTimer();
    }

    startTimer = () => {
      this.clearTimer();

      // 这包含了 undefined 与 0
      if (!interval) {
        return;
      }
      const upperBounds = this.props[upperPropName].length;
      this._timer = setTimeout(() => {
        this.props[`${advancePropName}Increment`](upperBounds);
      }, interval);
    };

    componentWillUnmount() {
      this.clearTimer();
    }

    clearTimer = () => {
      clearTimeout(this._timer);
    };

    render() {
      return <InComponent {...this.props}/>;
    }
  };
