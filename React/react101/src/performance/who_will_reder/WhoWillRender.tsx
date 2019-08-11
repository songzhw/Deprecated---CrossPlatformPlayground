import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IWhoWillRenderState } from "./WhoWillRenderReducer";

type IProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export const WhoWillRender = (props: IProps) => {
  function changeId() {

  }

  function changeName() {

  }

  return (
    <div>
      <IdNameView id={props.people.id} name={props.people.name}/>
      <SexView isMale={props.people.isMale}/>
    </div>
  );
};

interface INameIdProps {
  id: number,
  name: string,
}

const IdNameView = (props: INameIdProps) => {
  return (
    <p>{props.id} : {props.name} </p>
  );
};

interface ISexProps {
  isMale: boolean
}

const SexView = (props: ISexProps) => {
  return (
    <p> isMale = {""+props.isMale}</p>
  );
};

function mapStateToProps(state: IWhoWillRenderState) {
  console.log(`szw mapStateToProps`, state);
  return { people: state };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    changeId: (id: number) => dispatch({ type: "WhoRender.changeId", payload: { id } }),
    changeName: (name: string) => dispatch({ type: "WhoRender.changeName", payload: { name } }),
    changeSex: (isMale: boolean) => dispatch({ type: "WhoRender.changeSex", payload: { isMale } })
  };
}


export const WhoWillRenderDemo = connect(mapStateToProps, mapDispatchToProps)(WhoWillRender);
