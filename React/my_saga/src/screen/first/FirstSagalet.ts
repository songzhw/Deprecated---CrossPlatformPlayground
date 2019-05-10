import { call, fork, put, take } from "../../sagalet/SagaletEffects";
import { createFirstOnAddedAction, FirstActionTypes, IFirstAddAction } from "./FirstReducer";
import { add, print } from "./FirstManager";
import { fetchNumberForAdding } from "./Fetch";

export function* firstSaga() {
  yield take(FirstActionTypes.ADD, onSagaAdd);
}

function* onSagaAdd(action: IFirstAddAction) {
  console.log(`szw saga add: `, action.payload);
  const number2 = yield fetchNumberForAdding();
  yield fork(print, `got arg from server : ${number2}`);
  const result = yield call(add, action.payload.arg1, number2);
  yield put(createFirstOnAddedAction(result));
}
