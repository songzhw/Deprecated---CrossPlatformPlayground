import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

type IProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class _AppStateDemo extends React.Component<IProps> {
  state = {};

  render() {
    return (
      <div></div>
    );
  }
};

function mapStateToProps(state: any) {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    // mark: (id: number) => dispatch({ type: "", payload: { id } })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(_AppStateDemo);