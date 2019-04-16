import React, { Component } from "react";
import "./index.css";
import { http } from "./utils/download/HttpEngine";
import * as JSZip from "jszip";
import { JSDOM } from "jsdom";

class App extends Component {
  state = { text: "unload" };
  chapter = "<div/>";


  render() {
    return (
      <div className="appRootContainer">
        <span>{this.state.text}</span>
        <button className="buttonInHome" onClick={this.onDownload}>download epub</button>
        <button className="buttonInHome" onClick={this.onParseXML}>parse xml</button>
        <button className="buttonInHome" onClick={this.onUnzipContainer}>unzip epub: META-INF/container.xml</button>
        <button className="buttonInHome" onClick={this.onLoadOne}>chapter 01</button>
        <div dangerouslySetInnerHTML={this.renderChapter()}/>
        {/*TODO read xml*/}
        {/*TODO render xhtml*/}
      </div>
    );
  }

  onDownload = () => {
    const url = "https://gerhardsletten.github.io/react-reader/files/alice.epub";
    http(url)
      .then(arraybufferData => {
        this.arraybufferResponse = arraybufferData;
        this.setState({ text: "donwload finished" });
      });
  };

  onUnzipContainer = () => {
    const path = "OPS/package.opf";
    JSZip.loadAsync(this.arraybufferResponse)
      .then(zip => {
        return zip.file(path)
          .async("string");
      })
      .then(text => {
        console.log("szw content = ", text);
        this.setState({ text });
      });
  };

  onParseXML = () => {
    let xml = `
      <?xml version="1.0" encoding="UTF-8"?>
      <container xmlns="urn:oasis:names:tc:opendocument:xmlns:container" version="1.0">
        <rootfiles>
          <rootfile full-path="OPS/package.opf" media-type="application/oebps-package+xml">szw</rootfile>
        </rootfiles>
        <rootfile> 200 </rootfile>
      </container>
      `;
    const dom = new JSDOM(xml);
    const node = dom.window.document.querySelector("rootfile");
    console.log(`szw node text = ${node.textContent}`); //=> szw
    console.log(`szw node path = ${node.getAttribute("full-path")}`); //=> OPS/package.opf


    let another = `
<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" xml:lang="en" unique-identifier="pub-id">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:opf="http://www.idpf.org/2007/opf">
    <dc:language>en-US</dc:language>
    <meta property="dcterms:modified">2012-01-18T12:47:00Z</meta>
    <!-- Id, referenced above - in Reverse domain name notation -->
    <dc:identifier id="pub-id">edu.nyu.itp.future-of-publishing.alice-in-wonderland</dc:identifier>
    <!-- Basic Metadata -->    
    <dc:rights>Public domain in the USA.</dc:rights>
    <dc:creator>Lewis Carroll</dc:creator>
    <dc:contributor>Gordon Robinson</dc:contributor>
    <dc:title>Alice's Adventures in Wonderland</dc:title>
    <dc:subject>Fantasy</dc:subject>
    <dc:source>http://www.gutenberg.org/files/19033/19033-h/19033-h.htm</dc:source>
    <meta content="coverpage" name="cover"/>
  </metadata>
  <manifest>
    <!-- Frontmater -->
    <item id="toc" properties="nav" href="toc.xhtml" media-type="application/xhtml+xml"/>
    <item id="cover" href="cover.xhtml" media-type="application/xhtml+xml"/>
    <!-- Stylesheets -->
    <item id="style" href="css/stylesheet.css" media-type="text/css"/>
    <!-- Images -->
    <item id="cover-image" properties="cover-image" href="images/cover_th.jpg" media-type="image/jpeg"/>
    <item id="i001_th" href="images/i001_th.jpg" media-type="image/jpeg"/>
    <!-- Chapters -->
    <item id="titlepage" href="titlepage.xhtml" media-type="application/xhtml+xml"/>
    <item id="chapter_001" href="chapter_001.xhtml" media-type="application/xhtml+xml"/>
    <item id="chapter_002" href="chapter_002.xhtml" media-type="application/xhtml+xml"/>
    <item id="chapter_003" href="chapter_003.xhtml" media-type="application/xhtml+xml"/>
    <item id="chapter_004" href="chapter_004.xhtml" media-type="application/xhtml+xml"/>
    <item id="chapter_005" href="chapter_005.xhtml" media-type="application/xhtml+xml"/>
    <item id="chapter_006" href="chapter_006.xhtml" media-type="application/xhtml+xml"/>
    <item id="chapter_007" href="chapter_007.xhtml" media-type="application/xhtml+xml"/>
    <item id="chapter_008" href="chapter_008.xhtml" media-type="application/xhtml+xml"/>
    <item id="chapter_009" href="chapter_009.xhtml" media-type="application/xhtml+xml"/>
    <item id="chapter_010" href="chapter_010.xhtml" media-type="application/xhtml+xml"/>
    <itemref linear="yes" idref="joke"/>
  </manifest>
  <spine>
    <!-- Frontmater -->
    <itemref idref="cover" linear="no"/>
    <itemref idref="toc" linear="no"/>
    <!-- Chapters -->
    <itemref linear="yes" idref="titlepage"/>
    <itemref linear="yes" idref="chapter_001"/>
    <itemref linear="yes" idref="chapter_002"/>
    <itemref linear="yes" idref="chapter_003"/>
    <itemref linear="yes" idref="chapter_004"/>
    <itemref linear="yes" idref="chapter_005"/>
    <itemref linear="yes" idref="chapter_006"/>
    <itemref linear="yes" idref="chapter_007"/>
    <itemref linear="yes" idref="chapter_008"/>
    <itemref linear="yes" idref="chapter_009"/>
    <itemref linear="yes" idref="chapter_010"/>
  </spine>
</package>
`;
    const dom2 = new JSDOM(another);
    const package2 = dom2.window.document.querySelector("package");
    const spine = package2.querySelector("spine");
    const chapters = spine.querySelectorAll(`itemref[linear='yes']`);
    chapters.forEach(item => console.log(`szw spine idref = ${item.getAttribute("idref")}`));
  };

  onLoadOne = () => {
    const path = "OPS/chapter_001.xhtml";
    JSZip.loadAsync(this.arraybufferResponse)
      .then(zip => {
        return zip.file(path)
          .async("string");
      })
      .then(text => {
        console.log("szw content = ", text);
        this.chapter = text;
      });
  };

  renderChapter = () => {
    return { __html: this.chapter };
  };
}

export default App;
