import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ACTION_START_SYNC } from "./ChannelAsync_Saga";

type IProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const _SagaChannelAsyncDemo = (props: IProps) => {

  function onStart() {
    props.start();
  }

  return (
    <div>
      <button onClick={onStart}>Start Sync</button>
    </div>
  );
};

function mapStateToProps(state: any) {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    start: () => dispatch({ type: ACTION_START_SYNC })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(_SagaChannelAsyncDemo);
