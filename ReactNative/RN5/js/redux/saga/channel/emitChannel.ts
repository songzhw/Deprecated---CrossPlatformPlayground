import { eventChannel } from "redux-saga";
import EmitChannelManager from "./emitChannelManager";

export function emitChannel2() {
  return eventChannel(emit => {

    const onObserve = (num: number) => {
      emit(num);
    };

    EmitChannelManager.registerListener(onObserve);

    return () => EmitChannelManager.unregisterLister();
  });
}
