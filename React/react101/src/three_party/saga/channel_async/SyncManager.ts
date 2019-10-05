import { AnyAction } from "redux";
import { ACTION_CONTINUE_SYNC } from "./ChannelAsync_Saga";

let listener: any = null;

const subscribe = (l: (action: AnyAction) => void) => {
  listener = l;
};
const unsubscribe = () => {
  listener = null;
};

const fetchApi = (id: string) => {

};

function* start() {
  const resp = yield fetch("http://www.mocky.io/v2/5d99166d340000ec08f48b06");
  const str = yield resp.json();
  console.log(`szw: mgr: resp = `, str);
  console.log(`szw: mgr listener = `, listener);
  listener({ type: ACTION_CONTINUE_SYNC, payload: { data: str } });
}

export default { subscribe, unsubscribe, start, fetchApi };
