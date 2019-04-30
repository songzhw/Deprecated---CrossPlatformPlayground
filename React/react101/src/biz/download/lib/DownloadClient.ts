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
};

export default {startDownload, cancelDownload, removeDownload}
