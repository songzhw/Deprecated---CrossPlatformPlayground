export default class VidoPlayer {
  private name: string;

  constructor() {
    this.name = "bar";
  }

  public play(fileName: string) {
    console.log("Playing video file " + fileName);
  }

}
