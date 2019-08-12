import React, { useCallback } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ISlowListState } from "./SlowListReducer";

type IProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class _SlowListClass extends React.Component<IProps> {

  markItem = (id: number) => {
    console.log(`szw click : id = `, id);
    this.props.mark(id);
  };

  render() {
    const { data } = this.props;
    return (
      <div>
        {
          data.map(item =>
            <SlowListItem key={item.id} id={item.id} isMarked={item.isMarked} onClick={() => this.markItem(item.id)}/>
          )
        }
      </div>
    );
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(_SlowListClass);

// ================= ================= =================

interface IItemProps {
  id: number;
  isMarked: boolean;
  onClick: () => void;
}

const _SlowListItem = (props: IItemProps) => {
  const style = { fontSize: "30px" };
  console.log(`szw item re-render`);
  return (
    <p style={style} onClick={props.onClick}>{props.id} - {props.isMarked ? "✔" : "x"}</p>
  );
};
const SlowListItem = React.memo(_SlowListItem);