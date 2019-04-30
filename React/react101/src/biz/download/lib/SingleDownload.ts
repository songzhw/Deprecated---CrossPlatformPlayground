export interface ICompleteResult {
  url: string;
}

export class SingleDownload {
  public xhr: XMLHttpRequest;
  public url = "";

  constructor(url: string) {
    this.url = url;
    this.xhr = new XMLHttpRequest();
  }

  public download() {
    const GET = "GET";
    const ARRAY_BUFFER = "arraybuffer";

    this.xhr.open(GET, this.url);

    this.xhr.responseType = ARRAY_BUFFER;

    this.xhr.send();
  }


  public register(onProgressListener: (ev: ProgressEvent) => void,
                  onFailureListener: (result: ICompleteResult) => void,
                  onFinishListener: (result: ICompleteResult) => void) {
    this.xhr.onprogress = onProgressListener;

    this.xhr.onload = () => {
      if (this.xhr.status && this.xhr.status < 400) {
        onFinishListener({ url: this.url });
      } else {
        onFailureListener({ url: this.url });
      }
    };
  }

  public unregister() {
    this.xhr.onprogress = null;
    this.xhr.onload = null;
  }

  public cancelDownload() {
    this.xhr.abort();
  }
}



