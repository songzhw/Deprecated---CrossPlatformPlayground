import { actionChannel, race, put, take } from "redux-saga/effects";
import { actionChannelSaga } from "../actionChannelSaga";


describe("Testing channelSaga", () => {
  function createMockChannel(name = "channel") {
    return { name, take: jest.fn(), close: jest.fn() };
  }

  test("test one single actionChannel", () => {
    const saga = actionChannelSaga();
    saga.next(); //开始执行. 执行到 yield actionChannel()完了为止

    const mockChannel = createMockChannel();
    const takenItemFromChannel = saga.next(mockChannel); //执行到yield take(channnel)为止
    expect(takenItemFromChannel.value).toEqual(take(mockChannel));


  });
});
