import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { SHOW_USER } from "./SagaWait";

interface IInnerProps {
}

type IProps = IInnerProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const _SagaWaitScreen = (props: IProps) => {

  function onClick() {
    props.fetch(3);
  }

  console.log(`szw screen: props = `, props);
  const { user } = props;
  let text = "";
  if (user) {
    text = user.id + " / " + user.name + " / " + user.sex;
  } else {
    text = "(empty)";
  }
  return (
    <div>
      <button onClick={onClick}> fetch + show user</button>
      <p> {text} </p>
    </div>
  );
};


function mapStateToProps(state: any) {
  return { user: state.user };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    fetch: (id: number) => dispatch({ type: SHOW_USER, payload: { id } })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(_SagaWaitScreen);
