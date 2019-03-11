import { eventChannel } from "redux-saga";

export default function tripleChannel(newspaper) {
  return eventChannel(emit => {
    const onReceive = (num) => {
      console.log(`szw channel (begin) num = ${num}`);
      emit(num * 3);
    };

    newspaper.subscribe(onReceive);

    return () => {
      newspaper.unsubscribe();
    };
  });
}