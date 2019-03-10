import { eventChannel } from "redux-saga";

export default function doubleChannel(newspaper) {
  return eventChannel(emit => {
    const onReceive = (num) => {
      console.log(`szw channel (begin) num = ${num}`);
      emit(num * 2);
    };

    newspaper.subscribe(onReceive);
    newspaper.createNews();

    return () => {
      newspaper.unsubscribe();
    };
  });
}