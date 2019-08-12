import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ISlowListState } from "./SlowListReducer";

type IProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const _SlowListScreen = (props: IProps) => {

  const markItem = (id: number) => {
    props.mark(id);
  };

  const { data } = props;
  console.log(`data = `, data);
  const style = { overflow: "scroll", height: "600px" };
  return (
    <div>
      {
        data.map(item =>
          <SlowListItem key={item.id} id={item.id} isMarked={item.isMarked} onClick={() => markItem(item.id)}/>
        )
      }
    </div>
  );
};

function mapStateToProps(state: ISlowListState) {
  return {
    data: state.items
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    mark: (id: number) => dispatch({ type: "SlowList.mark", payload: { id } })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(_SlowListScreen);

// ================= ================= =================

interface IItemProps {
  id: number;
  isMarked: boolean;
  onClick: () => void;
}

const SlowListItem = (props: IItemProps) => {
  const style = { fontSize: "30px" };
  return (
    <p style={style} onClick={props.onClick}>{props.id} - {props.isMarked ? "✔" : "x"}</p>
  );
};