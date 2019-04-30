import React, { useState } from "react";
import DownloadClient from "./lib/DownloadClient";
import { ICompleteResult } from "./lib/SingleDownload";

export const DownloadScreen = () => {
  const [progress, setProgress] = useState<number>(0);

  function onProgress(ev: ProgressEvent) {
    const offset = ev.loaded / ev.total * 100;
    setProgress(offset);
  }

  function onFail() {
    console.log(`szw onFail`);
  }

  function onSuccess(ev: ICompleteResult) {
    console.log(`szw success`);
    DownloadClient.removeDownload(ev.url);
  }

  function downloadAliceEpub() {
    const url = "https://gerhardsletten.github.io/react-reader/files/alice.epub";
    DownloadClient.startDownload(url, onProgress, onFail, onSuccess);
  }

  function downloadJazzMp3() {
    const url = "http://storage.googleapis.com/automotive-media/Jazz_In_Paris.mp3";
    DownloadClient.startDownload(url, onProgress, onFail, onSuccess);
  }


  return (
    <div>
      <p> progress : {progress} </p>
      <button onClick={downloadAliceEpub}> Alice in rabit hole (epub)</button>
      <button onClick={downloadJazzMp3}>jazz in Paris (mp3)</button>
    </div>
  );
};
