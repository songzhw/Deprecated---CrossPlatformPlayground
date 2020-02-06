import React from "react";
import "../UiDemos.css";

export class IframeNodeTreeDemo extends React.Component {
  state = {};
  webview: HTMLIFrameElement | null = null;

  onClick = () => {
    if (!this.webview) {
      return;
    }
    console.log(`iframe size = `, this.webview.getBoundingClientRect());
    const item = this.findFirstVisibleItem(this.webview);
    console.log(`fistVisible = `, item);
  };

  findFirstVisibleItem = (parent: Element) => {
    const length = parent.childNodes.length;
    for (let index = 0; index < length; index++) {
      const child = parent.childNodes[index] as Element; // ChildNode类型没有getBoundingClientRect()方法
      console.log(`szw child = `, child);
      if (this.isNodeInRoot(child.getBoundingClientRect(), parent.getBoundingClientRect())) {
        console.log(`szw ${index} is in: `, child);
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
