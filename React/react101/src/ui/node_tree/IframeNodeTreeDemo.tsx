import React from "react";
import "../UiDemos.css";
import { getLayout } from "../../utils/UiUtils";

export class IframeNodeTreeDemo extends React.Component {
  state = {};
  webview: HTMLIFrameElement | null = null;

  onClick1 = () => {
    if (!this.webview) { return; }
    if(!this.webview.contentDocument){ return; }
    const body = this.webview.contentDocument.querySelector("body");
    const item = this.findFirstVisibleItem(body as Element, this.webview);
    console.log(`fistVisible = `, item);
    // @ts-ignore
    console.log(`fistVisible.top = `, item ? item.offsetTop : "000");
  };

  onClick2 = ()=> {
    if (!this.webview) { return; }
    if(!this.webview.contentDocument){ return; }

    const body = this.webview.contentDocument.querySelector("body");
    if(!body) {return}
    body.scrollTo(0, 480);

    /*
    const p = this.webview.contentDocument.querySelector("h4");
    if(!p) {return;}
    p.scrollIntoView()
    */
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
        <button onClick={this.onClick1}>get First Visible Element</button>
        <button onClick={this.onClick2}>go to a specific element</button>
        <iframe ref={el => this.webview = el} src="longText.html" className="webview"/>
      </div>
    );
  }
}
