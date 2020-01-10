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
  static container = document.createElement("div");

  static show(text: string) {
    // container.style.cssText = `display:flex;justify-content:center;align-items:center; height:100vh;`; //另一种布局方式
    document.body.appendChild(Toast.container); //也加到本组件中来. 没写在render()里, 所以这是动态添加的
    const view = ReactDOM.render(<ToastView/>, Toast.container) as unknown as ToastView; // 不加"as unknown"就会报错
    view.add(text);
  }

  static dismiss() {
    ReactDOM.unmountComponentAtNode(Toast.container)
  }
}
