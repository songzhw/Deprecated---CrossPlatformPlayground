import { put, take } from "../../sagalet/SagaletEffects";
import { createFirstOnAddedAction, FirstActionTypes, IFirstAddAction } from "./FirstReducer";

export function* firstSaga() {
  yield take(FirstActionTypes.ADD, onSagaAdd);
}

function* onSagaAdd(action: IFirstAddAction) {
  console.log(`szw saga add: `, action.payload);
  const result = action.payload.arg1 + action.payload.arg2;
  yield put(createFirstOnAddedAction(result));
}
