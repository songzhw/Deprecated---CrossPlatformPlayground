import { take } from "../../sagalet/SagaletEffects";
import { FirstAction, FirstActionTypes, IFirstAddAction } from "./FirstReducer";
import { AnyAction } from "redux";

export function* firstSaga() {
  yield take(FirstActionTypes.ADD, onSagaAdd);
}

function* onSagaAdd(action: IFirstAddAction) {
  yield 20;
}
