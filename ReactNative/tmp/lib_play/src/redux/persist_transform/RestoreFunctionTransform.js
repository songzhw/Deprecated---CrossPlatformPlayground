import { createTransform } from "redux-persist";

const createObject = (num) => {
  return {
    number: num,
    isEven: () => {
      return num % 2 === 0;
    }
  };
};

const inbound = (state, key) => {
  return { ...state };
};

const outbound = (state, key) => {
  // console.log(`szw outbound = ${key}, ${JSON.stringify(state)}`);
  if ("obj" === key) {
    let { number } = state.obj; // state: {obj: {number: 1} }
    let result = createObject(number);
    return { ...state, obj: result };
  } else {
    return { ...state };
  }

};

export const withFuncTransform = createTransform(inbound, outbound);
