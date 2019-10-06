import { AnyAction } from "redux";
import { eventChannel, END } from "redux-saga";
import SyncManager from "./SyncManager";

export function ChannelAsync_Channel() {
  return eventChannel(emit => {
    async function observe(action: AnyAction) {
      await emit(action);

      const { isComplete } = action.payload.data;
      if (isComplete) {
        await emit(END);
      }
    }

    SyncManager.subscribe(observe);
    return () => SyncManager.unsubscribe();
  });
}
