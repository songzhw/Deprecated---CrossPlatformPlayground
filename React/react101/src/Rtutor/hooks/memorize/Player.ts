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
    console.log(`szw play: handler = `, this.handler);

  }

  public pause() {
    console.log(`szw pause : handler = `, this.handler);
    console.log(`clear interval`);
    clearInterval(this.handler);
  }

}