import { eventChannel } from "redux-saga";

export default function doulbeChannle(newspaper) {
  return eventChannel(emit => {
    const onReceive = (num) => {
      emit(num * 2);
    };

    newspaper.subscribe(onReceive);
    newspaper.createNews();

    return () => {
      newspaper.unsubscribe();
    };
  });
}