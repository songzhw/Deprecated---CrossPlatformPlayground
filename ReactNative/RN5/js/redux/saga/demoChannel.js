import { eventChannel } from "redux-saga";

export default function doubleChannel(newspaper) {
  return eventChannel(emit => {
    const onReceive = (num) => {
      console.log(`szw channel (begin) num = ${num}`);
      emit(num * 2);
    };

    newspaper.subscribe(onReceive);
    // setTimeout()不能少. 不然已经执行完了, 就进入不了saga中的while(true)循环了
    setTimeout( ()=> newspaper.createNews(), 500)

    return () => {
      newspaper.unsubscribe();
    };
  });
}