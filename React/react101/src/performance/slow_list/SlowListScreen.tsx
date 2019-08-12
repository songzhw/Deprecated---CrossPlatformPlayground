import React, { useCallback } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ISlowListState } from "./SlowListReducer";

type IProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const _SlowListScreen = (props: IProps) => {

  const markItem = (id: number) => {
    props.mark(id);
  };

  const { data } = props;
  const clickFunc = useCallback(markItem, []);
  return (
    <div>
      {
        data.map(item =>
          <SlowListItem key={item.id} id={item.id} isMarked={item.isMarked} onClick={markItem}/>
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
  onClick: (id: number) => void;
}

const _SlowListItem = (props: IItemProps) => {

  function clickMe() {
    const { id } = props;
    props.onClick(id);
  }

  const style = { fontSize: "30px" };
  console.log(`szw re-render item`);
  return (
    <p style={style} onClick={clickMe}>{props.id} - {props.isMarked ? "✔" : "x"}</p>
  );
};
const SlowListItem = React.memo(_SlowListItem);