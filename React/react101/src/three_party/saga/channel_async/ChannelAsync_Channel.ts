import { AnyAction } from "redux";
import { eventChannel, END } from "redux-saga";
import SyncManager from "./SyncManager";

export function ChannelAsync_Channel() {
  return eventChannel(emit => {
    function observe(action: AnyAction) {
      emit(action);

      const { isComplete } = action.payload.data;
      if (isComplete) {
        emit(END);
      }
    }

    SyncManager.subscribe(observe);
    return () => SyncManager.unsubscribe();
  });
}
