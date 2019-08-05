class Player {
  private id: number = 0;
  private handler: number = -1;
  public callback: ((progress: number) => void) | null;

  constructor(callback: ((progress: number) => void) | null) {
    this.callback = callback;
  }

  public play() {
    if (this.callback === null) {
      return;
    }

    // @ts-ignore
    this.handler = setInterval(() => {
      this.id++;
      this.callback!(this.id);
    }, 1000);
    // console.log(`szw play: handler = `, this.handler);

  }

  public pause() {
    if (this.callback === null) {
      return;
    }
    // console.log(`szw pause : handler = `, this.handler);
    // console.log(`clear interval`);
    // this.callback = null;
    clearInterval(this.handler);
  }

}

export const player = new Player(null);