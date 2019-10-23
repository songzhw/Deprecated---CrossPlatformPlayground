import React from "react";

export const AutoAdvancesWrapper = (InComponent, advancePropName) =>
  class ComponentWithAutoAdvance extends React.PureComponent {

    componentDidMount() {
      this.startTimer();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      // 第一次加载时不走componentDidUpdate
    }

    startTimer = () => {
      const { interval, upperBound } = this.props;
      this._timer = setTimeout(() => {
        this.props[`${advancePropName}Increment`](upperBound);
      }, interval);
    };

    render() {
      return <InComponent {...this.props}/>;
    }
  };
