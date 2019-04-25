export default class AudioPlayer {
  private name: string;

  constructor() {
    this.name = "bar";
  }

  public play(fileName: string) {
    console.log("Playing sound file " + fileName);
  }

}
