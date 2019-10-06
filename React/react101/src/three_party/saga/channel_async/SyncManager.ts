import { AnyAction } from "redux";
import { ACTION_CONTINUE_SYNC, ACTION_TEMP } from "./ChannelAsync_Saga";

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
  console.log(`==================== szw: sync() ${id}`);
  const resp = yield fetch(`http://www.mocky.io/v2/${id}`);
  const str = yield resp.json();
  for (let i = 0; i < 10; i++) {
    if (listener) {
      if (i === 0) {
        listener({ type: ACTION_CONTINUE_SYNC, payload: { id: i, data: str } });
      } else {
        listener({ type: ACTION_TEMP, payload: { data: { isComplete: false } } });
      }
    }
  }
}

export default { subscribe, unsubscribe, sync, fetchApi };
