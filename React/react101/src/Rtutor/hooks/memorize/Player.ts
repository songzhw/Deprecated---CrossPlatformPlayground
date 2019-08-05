export class Player {
  private handler: number = -1;
  private callback: () => void;

  constructor(callback: () => void) {
    this.callback = callback;
  }

  public play() {
    // @ts-ignore
    this.handler = setInterval(this.callback, 1000);
  }

  public pause() {
    clearInterval(this.handler);
  }

}