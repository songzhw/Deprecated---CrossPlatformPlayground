import React, { Component } from "react";
import "./index.css";
import { http } from "./utils/download/HttpEngine";
import * as JSZip from "jszip";
import { JSDOM } from "jsdom";

class App extends Component {
  state = { text: "unload", chapter: "<div/>", imgSrc: "" };


  render() {
    return (
      <div className="appRootContainer">
        <span>{this.state.text}</span>
        <button className="buttonInHome" onClick={this.onDownload}>download epub</button>
        <button className="buttonInHome" onClick={this.onParseXML}>parse xml</button>
        <button className="buttonInHome" onClick={this.onUnzipContainer}>unzip epub: META-INF/container.xml</button>
        <button className="buttonInHome" onClick={this.onUnzipImage}> unzip epub: image</button>
        <button className="buttonInHome" onClick={this.onLoadOne_Deprecated}><s>- chapter 01 (raw) -</s></button>
        <button className="buttonInHome" onClick={this.onLoadOne}>chapter 01</button>

        <div dangerouslySetInnerHTML={this.renderChapter()}/>
        <img src={this.state.imgSrc} width={160} height={193} alt=""/>
        <iframe id="inlineFrameExample"
                title="Inline Frame Example"
                width="300"
                height="200"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
        </iframe>
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

  onUnzipImage = () => {
    const path = "OPS/images/i001_th.jpg";
    JSZip.loadAsync(this.arraybufferResponse)
      .then(zip => {
        return zip.file(path)
          .async("blob");
      })
      .then(blob => {
        console.log(`szw blob = ${blob}, blogURL = ${URL.createObjectURL(blob)}`);
        //=> szw blob = [object Blob], blogURL = blob:http://localhost:3000/1906c6a7-9bec-41d9-bb21-7c13f95e646a
        this.setState({ imgSrc: URL.createObjectURL(blob) });
      });
  };

  onLoadOne_Deprecated = () => {
    const path = "OPS/chapter_001.xhtml";
    JSZip.loadAsync(this.arraybufferResponse)
      .then(zip => {
        return zip.file(path)
          .async("string"); //返回个Promise
      })
      .then(text => {
        console.log("szw content = ", text);
        this.setState({ chapter: text });
      });
  };

  renderChapter = () => {
    return { __html: this.state.chapter };
  };

  onLoadOne = () => {
    /*
    const text = `<div> <img height={40} src ="image/a.jpg"/> </div> <p>work</p> <img src= 'image/bean.jpg'/>`;
    const pattern = /<img[^>]*src *= *["']([^"']*)["']/g;  //"g"是modifier, 表示是会查找完, 而不是找到第一个就结束不找了.
    let result = pattern.exec(text);
    let tmp = text;
    while (result) {
      let found = result[1];
      console.log(found);
      tmp = tmp.replace(found, "xyz");
      result = pattern.exec(text);
    }
    this.setState({ text: tmp });
    */


    const path = "OPS/chapter_001.xhtml";
    JSZip.loadAsync(this.arraybufferResponse)
      .then(zip => {
        return zip.file(path)
          .async("string"); //返回个Promise
      })
      .then(text => {
        console.log("szw content = ", text);
        this.chapter1 = text;
        const pattern = /<img[^>]*src *= *["']([^"']*)["']/g;  //"g"是modifier, 表示是会查找完, 而不是找到第一个就结束不找了.
        let result = pattern.exec(text);
        let foundImageSrcs = [];
        while (result) {
          let found = result[1];
          foundImageSrcs.push(found);
          result = pattern.exec(text);
        }
        console.log(`szw img = ${foundImageSrcs}`);

        foundImageSrcs.forEach(item => {
          const path = `OPS/${item}`;
          JSZip.loadAsync(this.arraybufferResponse)
            .then(zip => {
              return zip.file(path)
                .async("blob");
            })
            .then(blob => {
              const urlInMemory = URL.createObjectURL(blob);
              this.chapter1 = this.chapter1.replace(item, urlInMemory);
              this.setState({ chapter: this.chapter1 });
              console.log(`szw new chapter = `, this.chapter1);
            });
        });

      });

  };
}

export default App;

/*
JSZip extract image : https://github.com/Stuk/jszip/issues/399

 */
