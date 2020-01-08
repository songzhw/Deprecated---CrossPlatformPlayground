/*
要想要 Toast.info(). 方法有二:

1. 不使用class Toast, 因为使用起来就得是new Toast()才能用.
    所以可以定义几个函数, 然后export default {f1, f2}

2. 要么就是使用class, 然后定义为static方法.

*/
import React from "react";
import ReactDOM from "react-dom";
import { ToastView } from "./ToastView";

export class Toast {
  static show(text: string) {
    const container = document.createElement("div");
    container.style.cssText = `position:absolute;left:0; right:0;bottom:0;top:0; margin:auto;`;
    document.body.appendChild(container); //也加到本组件中来. 没写在render()里, 所以这是动态添加的
    const view = ReactDOM.render(<ToastView text={text}/>, container);
  }
}
