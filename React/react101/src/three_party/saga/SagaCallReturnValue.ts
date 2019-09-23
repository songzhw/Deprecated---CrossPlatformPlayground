import { takeEvery, call } from "@redux-saga/core/effects";

export interface ITemp12Object {
  id: number;
  name: string;
  type?: string;
}

function* onTemp1() {
  const obj = { id: 10, name: "temp1" };
  const ret = yield call(temp12Util, obj, "one");
  console.log(`szw temp1 : ret = `, ret);
}

function* onTemp2() {
  const obj = { id: 20, name: "temp2" };
  const ret = yield call(temp12Util, obj, "two");
  console.log(`szw temp2 : ret = `, ret);
}

function* temp12Util(obj: ITemp12Object, type: string) {
  obj.type = type;
  return obj;
}

export function* sagaCallReturnValue() {
  yield takeEvery("temp001", onTemp1);
  yield takeEvery("temp002", onTemp2);
}
