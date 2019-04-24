import { emitChannel2 } from "../emitChannel";
import EmitChannelManager from "../emitChannelManager";


/*
Official test: https://github.com/redux-saga/redux-saga/blob/2d68fa16350253ed2ff0861f66ac99286109813c/examples/cancellable-counter/test/sagas.js
but it's more like testing saga, not testing channel.

暂时没找到测试eventChannel()的方法. 当然测试saga还是行的.
 */
describe("test channel (event channel)", () => {
  test("test emitChannel2()", () => {
    const channel = emitChannel2();
    // console.log(EmitChannelManager.listener); //=> undefined


  });
});
