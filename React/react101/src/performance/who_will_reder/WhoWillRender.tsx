import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IWhoWillRenderState } from "./WhoWillRenderReducer";

type IProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export const WhoWillRender = (props: IProps) => {
  function changeId() {
    const id = new Date().getTime();
    props.changeId(id);
  }

  function changeName() {
    const name = "item" + Math.random() * 1000;
    props.changeName(name);
  }

  function getOlder() {
    props.age();
  }

  console.log(`Screen render()`);
  return (
    <div>
      <IdNameView id={props.people.id} name={props.people.name}/>
      <AgeSexView isMale={props.people.isMale} age={props.people.age}/>
      <button onClick={changeId}> Change ID</button>
      <button onClick={changeName}> Change Name</button>
      <button onClick={getOlder}> Get older</button>
    </div>
  );
};

// ================================================
interface INameIdProps {
  id: number,
  name: string,
}

const IdNameView = (props: INameIdProps) => {
  console.log(`szw IdNameView reder()`);
  return (
    <p>{props.id} : {props.name} </p>
  );
};

// ================================================
type IAgeSexProps = IAgeProps & ISexProps;
const AgeSexView = (props: IAgeSexProps) => {
  console.log(`szw AgeSexView reder()`);
  return (
    <div>
      <AgeView age={props.age}/>
      <SexView isMale={props.isMale}/>
    </div>
  );
};

interface ISexProps {
  isMale: boolean
}

const SexView = (props: ISexProps) => {
  console.log(`szw SexView reder()`);
  return (
    <p> isMale = {"" + props.isMale}</p>
  );
};

interface IAgeProps {
  age: number
}

const AgeView = (props: IAgeProps) => {
  console.log(`szw AgeView reder()`);
  return (
    <p> age = {"" + props.age}</p>
  );
};

// ================================================

function mapStateToProps(state: IWhoWillRenderState) {
  console.log(`szw mapStateToProps`, state);
  return { people: state };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    changeId: (id: number) => dispatch({ type: "WhoRender.changeId", payload: { id } }),
    changeName: (name: string) => dispatch({ type: "WhoRender.changeName", payload: { name } }),
    changeSex: (isMale: boolean) => dispatch({ type: "WhoRender.changeSex", payload: { isMale } }),
    age: () => dispatch({ type: "WhoRender.age" })
  };
}


export const WhoWillRenderDemo = connect(mapStateToProps, mapDispatchToProps)(WhoWillRender);
