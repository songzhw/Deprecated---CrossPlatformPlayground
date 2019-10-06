import { AnyAction } from "redux";
import { eventChannel, END } from "redux-saga";
import SyncManager from "./SyncManager";

export function ChannelAsync_Channel() {
  return eventChannel(emit => {
    function observe(action: AnyAction) {
      const { isComplete } = action.payload.data;
      if (isComplete) {
        emit(END);
      } else {
        console.log(`szw channel emit(): `, action);
        emit(action);
      }
    }

    SyncManager.subscribe(observe);
    return () => SyncManager.unsubscribe();
  });
}
