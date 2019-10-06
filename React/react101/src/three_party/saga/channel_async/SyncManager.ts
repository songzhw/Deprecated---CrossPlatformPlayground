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
  console.log(`szw mgr: fetchApi: `, id);
};

function* start() {
  const resp = yield fetch("http://www.mocky.io/v2/5d99166d340000ec08f48b06");
  const str = yield resp.json();
  listener({ type: ACTION_CONTINUE_SYNC, payload: { data: str } });
}

export default { subscribe, unsubscribe, start, fetchApi };
