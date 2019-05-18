import React, { useState } from "react";
import DownloadClient from "../download/lib/DownloadClient";
import { ICompleteResult } from "../download/lib/SingleDownload";

export const AdrmScreen: React.FC = () => {
  const [info, setInfo] = useState("-----");

  function onProgress(ev: ProgressEvent) {
    const offset = ev.loaded / ev.total * 100;
    console.log(`szw progress: `, offset);
  }

  function onFail(ev: ICompleteResult) {
    DownloadClient.removeDownload(ev.url);
    console.log(`szw download error`)
  }

  function onSuccess(ev: ICompleteResult) {
    DownloadClient.removeDownload(ev.url);
    console.log(`szw download success`)
    setInfo("download finished!")
  }

  function onClickDownload() {
    const url = "https://songzhw.github.io/repo/sj.epub";
    DownloadClient.startDownload(url, onProgress, onFail, onSuccess);
  }

  return (
    <div>
      <p>{info}</p>
      <button onClick={onClickDownload}> download book</button>
    </div>
  );
};