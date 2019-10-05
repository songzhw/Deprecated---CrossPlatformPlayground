import { AnyAction } from "redux";

let listener: any = null;

const unsubscribe = () => {
  listener = null;
};

export default { listener, unsubscribe };
