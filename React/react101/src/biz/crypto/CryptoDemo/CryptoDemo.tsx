import React from "react";
import { decryptDRMedBase64 } from "./crypto";
import * as JSZip from "jszip";

export class CryptoDemo extends React.Component {
  state = { dec: "" };

  componentDidMount() {
    JSZip.loadAsync("rtm.epub")
      .then(zip => {
        return zip.file("chapter01.html")
          .async("text");
      })
      .then(chapter => this.setState({ dec: chapter }));


  }


  render() {
    return (
      <div>
        <p>{this.state.dec}</p>
      </div>
    );
  }
}
