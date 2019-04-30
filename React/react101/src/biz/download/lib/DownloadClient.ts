import { ICompleteResult, SingleDownload } from "./SingleDownload";

interface IDownloadPool {
  [url: string]: SingleDownload;
}

const downloaderPool: IDownloadPool = {};

const startDownload = (url: string,
                       onProgressListener?: (ev: ProgressEvent) => void,
                       onFailureListener?: (result: ICompleteResult) => void,
                       onSuccessListener?: (result: ICompleteResult) => void) => {
  const downloader = new SingleDownload(url);
  downloaderPool[url] = downloader;
  console.log(`szw 1 `, downloaderPool);
  downloader.register(onProgressListener, onFailureListener, onSuccessListener);
  downloader.download();
};

const cancelDownload = (url: string) => {
  const downloader = downloaderPool[url];
  if (downloader) {
    downloader.cancelDownload();
  }
};

const removeDownload = (url: string) => {
  const downloader = downloaderPool[url];
  if (downloader) {
    delete downloaderPool[url];
  }
  console.log(`szw 2 `, downloaderPool);
};

export default { startDownload, cancelDownload, removeDownload };
