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

function* sync(id: string) {
  const resp = yield fetch(`http://www.mocky.io/v2/${id}`);
  const str = yield resp.json();
  listener({ type: ACTION_CONTINUE_SYNC, payload: { data: str } });
}

export default { subscribe, unsubscribe, sync, fetchApi };
