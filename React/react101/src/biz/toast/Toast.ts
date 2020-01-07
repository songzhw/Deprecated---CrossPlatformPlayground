// 不使用class Toast, 因为使用起来就得是new Toast()才能用.
// 我想要的是static这样的: Toast.info()

import ReactDOM from "react-dom";
import { ToastView } from "./ToastView";

export class Toast {
  show() {
    const container = document.createElement("div");
    document.body.appendChild(container); //也加到本组件中来. 没写在render()里, 所以这是动态添加的
    const view = ReactDOM.render(<ToastView text=""/>, container)
  }
}
