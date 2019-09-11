import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface IInnerProps {
}

type IProps = IInnerProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const _SagaWaitScreen = (props: IProps) => {

  return (
    <div>
    </div>
  );
};


function mapStateToProps(state: any) {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    // mark: (id: number) => dispatch({ type: "", payload: { id } })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(_SagaWaitScreen);
