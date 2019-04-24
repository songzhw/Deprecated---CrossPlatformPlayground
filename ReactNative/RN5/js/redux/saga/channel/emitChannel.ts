import { eventChannel, END } from "redux-saga";
import { EmitChannelManager } from "./emitChannelManager";

export function emitChannel2() {
  return eventChannel(emit => {

    const onObserve = (num: number) => {
      emit(num);
    };

    const manager = new EmitChannelManager();
    manager.registerListener(onObserve);

    return () => console.log(`emitChannel unregister`);
  });
}
