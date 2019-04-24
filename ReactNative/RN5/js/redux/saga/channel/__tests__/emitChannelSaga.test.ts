import { put, take } from "redux-saga/effects";
import { emitChannelSaga } from "../emitChannelSaga";
import { emitChannel2 } from "../emitChannel";

describe("Testing emitChannelSaga", () => {
  function createMockChannel(name = "channel") {
    return { name, take: jest.fn(), close: jest.fn() };
  }

  test("test one single emitChannel", () => {
    const saga = emitChannelSaga();
    saga.next(); //开始执行. 执行到 yield emitChannel2()完了为止

    const mockChannel = emitChannel2();
    const takenItemFromChannel = saga.next(mockChannel); //执行到yield take(channnel)为止
    expect(takenItemFromChannel.value).toEqual(take(mockChannel));

    const putAction = saga.next(333);
    expect(putAction.value).toEqual(put({ type: "EC", id: 333 }));

  });
});
