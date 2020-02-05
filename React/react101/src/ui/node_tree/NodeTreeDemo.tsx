import React from "react";
import "../UiDemos.css";

export class NodeTreeDemo extends React.Component {
  state = {};
  root: HTMLDivElement | null = null;

  onClick1 = () => {
    if(!this.root){ return; }
    console.log(`szw body = `, this.root.getBoundingClientRect());
    console.log(`szw children = `, this.root.childNodes.length); //=> 7

    const length = this.root.childNodes.length;
    for (let index = 0; index < length; index++) {
      const child = this.root.childNodes[index] as Element; // ChildNode类型没有getBoundingClientRect()方法
      if (this.isNodeInRoot(child.getBoundingClientRect(), this.root.getBoundingClientRect())) {
        console.log(`szw ${index} is in: `, child);
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
      <div ref={el => this.root = el}>
        <button onClick={this.onClick1}>action 1</button>
        <p className="text">EPUB is an e-book file format that uses the ".epub" file extension. The term is short for electronic publication and is sometimes styled ePub. EPUB is supported by many e-readers, and compatible software is available for most smartphones, tablets, and computers. EPUB is a technical standard published by the International Digital Publishing Forum (IDPF). It became an official standard of the IDPF in September 2007, superseding the older Open eBook standard.[2]</p>
        <p className="text">The Book Industry Study Group endorses EPUB 3 as the format of choice for packaging content and has stated that the global book publishing industry should rally around a single standard.[3] The EPUB format is implemented as an archive file consisting of HTML files carrying the content, along with images and other supporting files. EPUB is the most widely supported vendor-independent XML-based (as opposed to PDF) e-book format; that is, it is supported by almost all hardware readers, except for Kindle.[4]</p>

        {/*hello comment*/}
        <button onClick={this.onClick1}>same action</button>
        <h2>History</h2>
        <div>
          <p>inner text</p>
        </div>
        <p className="text">A successor to the Open eBook Publication Structure, EPUB 2.0 was approved in October 2007,[5] with a maintenance update (2.0.1) approved in September 2010.[6]</p>
        <p className="text"> The EPUB 3.0 specification became effective in October 2011, superseded by a minor maintenance update (3.0.1) in June 2014.[7] New major features include support for precise layout or specialized formatting (Fixed Layout Documents), such as for comic books,[8] and MathML support. The current version of EPUB is 3.1, effective January 5, 2017.[9] The (text of) format specification underwent reorganization[10] and clean-up; format supports remotely-hosted resources and new font formats (WOFF 2.0 and SFNT)[11] and uses more pure HTML and CSS.[12]</p>
        <p className="text">  In May 2016 IDPF Members approved World Wide Web Consortium (W3C) merger,[13] "to fully align the publishing industry and core Web technology".[14]</p>
      </div>
    );
  }
}
