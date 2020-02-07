import React from "react";
import "../UiDemos.css";
import { getLayout } from "../../utils/UiUtils";

export class IframeNodeTreeDemo extends React.Component {
  state = {};
  webview: HTMLIFrameElement | null = null;

  onClick = () => {
    if (!this.webview) { return; }
    if(!this.webview.contentDocument){ return; }
    const body = this.webview.contentDocument.querySelector("body");
    // const item = this.findFirstVisibleItem(body as Element, this.webview);
    // console.log(`fistVisible = `, item);

    const h4 = this.webview.contentDocument.querySelector("h4");
    if(!body || !h4) {return;}
    h4.scrollIntoView()
  };

  // parent应该是iframe加载的body元素; 但client应该是iframe本身. (要也是body, 那body极长, firstVisibleItem就总是第一个子元素了)
  findFirstVisibleItem = (parent: Element, client: Element) => {
    const length = parent.childNodes.length;
    const parentLayout = getLayout(client);
    for (let index = 0; index < length; index++) {
      const child = parent.childNodes[index] as Element; // ChildNode类型没有getBoundingClientRect()方法
      const childLayout = getLayout(child);
      if(!childLayout || !parentLayout) { continue; }
      if (this.isNodeInRoot(childLayout, parentLayout)) {
        return child;
      }
    }
  };

  isNodeInRoot = (nodeRect: ClientRect, rootRect: ClientRect) => {
    return nodeRect.left < rootRect.right
      && nodeRect.right > rootRect.left
      && nodeRect.bottom > rootRect.top
      && nodeRect.top < rootRect.bottom;
  };

  render() {
    return (
      <div className="webViewContainer">
        <button onClick={this.onClick}>first item</button>
        <iframe ref={el => this.webview = el} src="longText.html" className="webview"/>
      </div>
    );
  }
}
