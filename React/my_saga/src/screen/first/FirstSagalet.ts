import { put, take } from "../../sagalet/SagaletEffects";
import { createFirstOnAddedAction, FirstActionTypes, IFirstAddAction } from "./FirstReducer";
import { add } from "./Math";

export function* firstSaga() {
  yield take(FirstActionTypes.ADD, onSagaAdd);
}

function* onSagaAdd(action: IFirstAddAction) {
  console.log(`szw saga add: `, action.payload);
  const result = add(action.payload.arg1, action.payload.arg2);
  yield put(createFirstOnAddedAction(result));
}
