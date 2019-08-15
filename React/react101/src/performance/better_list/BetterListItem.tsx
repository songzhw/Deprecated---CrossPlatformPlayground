import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IBetterListState } from "./BetterListReducer";

interface IInnerProps {
  id: string;
}

type IProps = IInnerProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const _BetterListItem = (props: IProps) => {
  function onClick() {
    props.mark(props.id);
  }

  const style = { fontSize: "30px" };
  console.log(`szw item re-render`);
  return (
    <p style={style} onClick={onClick}>{props.data.id} - {props.data.isMarked ? "✔" : "x"}</p>
  );
};

function mapStateToProps(state: IBetterListState, props: IInnerProps) {
  return {
    data: state[props.id]
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    mark: (id: string) => dispatch({ type: "BetterList.mark", payload: { id } })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(_BetterListItem);