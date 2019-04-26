import AudioPlayer from "./AudioPlayer";

export default class AudioConsumer {
  private player: AudioPlayer;

  constructor() {
    this.player = new AudioPlayer();
  }

  public playAudio() {
    this.player.play("song.mp3");
  }
}
