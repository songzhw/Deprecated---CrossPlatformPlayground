import {IAction} from "../core/CoreProps";

const initState = {}

export default (state = initState, action: IAction) => {
  switch (action.type) {
    default:
      return state
  }
}