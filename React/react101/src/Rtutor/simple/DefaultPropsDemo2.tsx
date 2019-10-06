import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

// tslint:disable-next-line:interface-name
interface _IProps {
  id: string
}

type IProps = _IProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export const DefaultPropsDemo2 = (props: IProps) => {

  return (
    <div>
      <p> {props.id}</p>
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
