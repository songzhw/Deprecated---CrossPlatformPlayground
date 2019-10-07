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

async function sync(id: string) {
  const resp = await fetch(`http://www.mocky.io/v2/${id}`);
  const str = await resp.json();
  listener({ type: ACTION_CONTINUE_SYNC, payload: { data: str } });
}

export default { subscribe, unsubscribe, sync, fetchApi };
