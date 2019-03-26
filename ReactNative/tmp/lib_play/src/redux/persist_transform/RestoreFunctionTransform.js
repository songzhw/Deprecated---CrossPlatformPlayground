import { createTransform } from "redux-persist";

const createObject = (num) => {
  return {
    obj: {
      number: num,
      isEven: () => {
        return num % 2 === 0;
      }
    }
  };
};

const inbound = (state, key) => {
  return { ...state };
};

const outbound = (state, key) => {
  let { number } = state.obj.obj;
  let result = createObject(number);
  return { ...state, obj: result };
};

export const withFuncTransform = createTransform(inbound, outbound);
