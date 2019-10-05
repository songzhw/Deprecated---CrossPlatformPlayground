import { AnyAction } from "redux";
import { eventChannel, END } from "redux-saga";
import SyncManager from "./SyncManager";

export function ChannelAsync_Channel() {
  return eventChannel(emit => {
    function observe(action: AnyAction) {
      const { isComplete } = action.payload;
      if (isComplete) {
        emit(END);
      } else {
        emit(action);
      }
    }

    SyncManager.subscribe(observe);
    return () => SyncManager.unsubscribe();
  });
}
