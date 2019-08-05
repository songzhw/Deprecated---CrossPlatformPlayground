export class Player {
  private id: number = 0;
  private handler: number = -1;
  private callback: (progress: number) => void;

  constructor(callback: (progress: number) => void) {
    this.callback = callback;
  }

  public play() {
    // @ts-ignore
    this.handler = setInterval(() => {
      this.id++;
      this.callback(this.id);
    }, 1000);

  }

  public pause() {
    console.log(`clear itnerval`)
    clearInterval(this.handler);
  }

}