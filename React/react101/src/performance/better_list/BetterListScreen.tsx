import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IBetterListState } from "./BetterListReducer";
import BetterListItem from "./BetterListItem";

type IProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class _BetterListScreen extends React.Component<IProps> {
  state = {};

  constructor(props: any) {
    super(props);
  }

  shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<{}>, nextContext: any): boolean {
    return false;
  }

  render() {
    console.log(`parent render`);
    const data = [];
    for (const id of Object.keys(this.props.data)) {
      data.push(id);
    }

    return (
      <div>
        {
          data.map(item=><BetterListItem key={item} id = {item}/>)
        }
      </div>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
class _BetterListItem extends React.Component {

}

function mapStateToProps(state: IBetterListState) {
  return {
    data: state
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    // mark: (id: number) => dispatch({ type: "", payload: { id } })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(_BetterListScreen);