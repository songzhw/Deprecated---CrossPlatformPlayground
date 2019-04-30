import { ICompleteResult, SingleDownload } from "./SingleDownload";

interface IDownloadPool {
  url?: SingleDownload;
}

const downloaderPool: IDownloadPool = {};

const startDownload = (url: string,
                       onProgressListener: (ev: ProgressEvent) => void,
                       onFailureListener: (result: ICompleteResult) => void,
                       onSuccessListener: (result: ICompleteResult) => void) => {
  const downloader = new SingleDownload(url);
  downloaderPool[url] = downloader;
  downloader.register(onProgressListener, onFailureListener, onSuccessListener);
  downloader.download();
};

const cancelDownload = (url: string) => {
  const downloader = downloaderPool[url];
};

