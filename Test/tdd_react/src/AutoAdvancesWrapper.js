import React from "react";

export const AutoAdvancesWrapper = (InComponent) =>
  class ComponentWithAutoAdvance extends React.PureComponent {
    render() {
      return <InComponent {...this.props}/>;
    }
  };
