export default class SoundPlayer {
  private foo: string;

  constructor() {
    this.foo = "bar";
  }

  public playSoundFile(fileName: string) {
    console.log("Playing sound file " + fileName);
  }

}
